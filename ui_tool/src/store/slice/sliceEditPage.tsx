import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  pageInfo: {
    id: 0,
    title: '',
    path: '',
    date: '',
    category: '',
  },
  page: [
    {
      type: 'initial',
      contentLayout: 0,
      groupId: '',
      src: [{}],
      link: [{}],
    },
  ],
};

const sliceEditPage = createSlice({
  name: 'editpage',
  initialState: initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.pageInfo = action.payload.pageInfo;
      if (action.payload.page.length !== 0) {
        state.page = action.payload.page; //빈페이지 아닐 경우
      } else {
        state.page = initialState.page;
      }
      //빈페이지 일 경우 자동으로 초기값 들어감
    },
    filteringInitialState: (state) => {
      //저장 전 initial이 있으면 모두 삭제
      const filteredPage = state.page.filter((item) => item.type !== 'initial');
      state.page = filteredPage;
    },

    updateTypeAndContentLayout: (state, action) => {
      const { index, type, contentLayout } = action.payload;
      if (index >= 0 && index < state.page.length) {
        state.page[index].type = type;
        state.page[index].contentLayout = contentLayout;
        state.page[index].src = [{}];
        state.page[index].link = [{}];
      }
    },
    //아래 함수는 중첩 레이아웃구조를 위한 함수
    // updateBlockForNestedLayout: (state, action) => {
    //   const { index, contentLayout, numberOfLayout, groupId, type } =
    //     action.payload;
    //   const nestedLayoutObj = Array.from({ length: numberOfLayout }, () => ({
    //     type,
    //     contentLayout,
    //     groupId,
    //     src: [{}],
    //     link: [[]],
    //   }));
    //   state.page.splice(index, numberOfLayout, ...nestedLayoutObj);
    // },
    // updateSrc: (state, action) => {
    //   const { index, src } = action.payload;
    //   const srcIndex = src.srcIndex;
    //   // const hasData = state.page[index].src.find(
    //   //   (item) => item.imageSrc === src.imageSrc
    //   // );
    //   // if (!hasData)
    //   state.page[index].src[srcIndex] = src;
    // },
    updateSrc: (state, action) => {
      const { index, src } = action.payload;
      const srcIndex = src.srcIndex;
      const existingData = state.page[index].src[srcIndex];
      state.page[index].src[srcIndex] = { ...existingData, ...src };
    },
    updateLink: (state, action) => {
      const { index, link } = action.payload;
      const linkIndex = link.linkIndex;
      const existingData = state.page[index].link[linkIndex];
      state.page[index].link[linkIndex] = { ...existingData, ...link };
    },
    pushEmptyObjToSrcAndLink: (state, action) => {
      const { index } = action.payload;
      // state.page[index].src.push({});
      state.page[index].link.push({});
    },
    deleteSrcAndLink: (state, action) => {
      const { index, boxIndex } = action.payload;
      const filteredSrc = state.page[index].src.filter(
        (_, idx) => idx !== boxIndex
      );
      const filteredLink = state.page[index].link.filter(
        (_, idx) => idx !== boxIndex
      );
      state.page[index].src = filteredSrc;
      state.page[index].link = filteredLink;
    },
    moveUpBlock: (state, action) => {
      const { index } = action.payload;
      if (index <= 0) return state;
      const pageCopy = [...state.page];
      const temp = pageCopy[index];
      pageCopy[index] = pageCopy[index - 1];
      pageCopy[index - 1] = temp;
      state.page = pageCopy;
    },
    moveDownBlock: (state, action) => {
      const { index } = action.payload;
      if (index >= state.page.length - 1) return state;
      const pageCopy = [...state.page];
      const temp = pageCopy[index];
      pageCopy[index] = pageCopy[index + 1];
      pageCopy[index + 1] = temp;
      console.log('pageCopy = ', pageCopy);
      state.page = pageCopy;
    },

    deleteBlock: (state, action) => {
      const { index } = action.payload;
      if (state.page.length === 0) return state;
      const filteredPage = state.page.filter((_, idx) => idx !== index);
      state.page = filteredPage;
    },
    putNewBlockTop: (state, action) => {
      const { index } = action.payload;
      if (index < 0 || index >= state.page.length) return state;
      state.page.splice(index, 0, {
        type: 'initial',
        contentLayout: 0,
        src: [{}],
        link: [{}],
      });
    },
    putNewBlockBottom: (state, action) => {
      const { index } = action.payload;
      if (index < 0 || index >= state.page.length) return state;
      state.page.splice(index + 1, 0, {
        type: 'initial',
        contentLayout: 0,
        src: [{}],
        link: [{}],
      });
    },
  },
});

export const {
  setInitialState,
  filteringInitialState,
  updateTypeAndContentLayout,
  updateBlockForNestedLayout,
  updateLink,
  updateSrc,
  pushEmptyObjToSrcAndLink,
  deleteSrcAndLink,
  moveUpBlock,
  moveDownBlock,
  deleteBlock,
  putNewBlockTop,
  putNewBlockBottom,
} = sliceEditPage.actions;
export default sliceEditPage;
