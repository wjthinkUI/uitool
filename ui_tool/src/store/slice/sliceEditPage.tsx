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
      type: '',
      contentLayout: 0,
      src: [{}],
      link: [{}],
    },
  ],
  selectedBlockIndex: 0,
};

const sliceEditPage = createSlice({
  name: 'editpage',
  initialState: initialState,
  reducers: {
    setInitialState: (state, action) => {
      state.pageInfo = action.payload.pageInfo;
      if (state.page.length === 0) {
        //빈페이지 일경우
        state.page.push({
          type: '',
          contentLayout: 0,
          src: [],
          link: [],
        });
      } else state.page = action.payload.page; //빈페이지 아닐 경우
    },
    selectBlockIndex: (state, action) => {
      state.selectedBlockIndex = action.payload;
    },
    updateTypeAndContentLayout: (state, action) => {
      const { index, type, contentLayout } = action.payload;
      state.page[index].type = type;
      state.page[index].contentLayout = contentLayout;
    },
    updateSrc: (state, action) => {
      const { index, src } = action.payload;
      const srcIndex = src.srcIndex;
      // const hasData = state.page[index].src.find(
      //   (item) => item.imageSrc === src.imageSrc
      // );
      // if (!hasData)
      state.page[index].src[srcIndex] = src;
    },
    updateLink: (state, action) => {
      const { index, link } = action.payload;
      const linkIndex = link.linkIndex;
      state.page[index].link[linkIndex] = link;
    },
    moveUpBlock: (state, action) => {
      const { index } = action.payload;
      if (index === 0) return state;
      const temp = state.page[index];
      state.page[index] = state.page[index - 1];
      state.page[index - 1] = temp;
    },
    moveDownBlock: (state, action) => {
      const { index } = action.payload;
      if (index === state.page.length - 1) return state;
      const temp = state.page[index];
      state.page[index] = state.page[index + 1];
      state.page[index + 1] = temp;
    },
    deleteBlock: (state, action) => {
      const { index } = action.payload;
      if (state.page.length === 1) return state;
      const filteredPage = state.page.filter((_, idx) => idx !== index);
      state.page = filteredPage;
    },
    putNewBlockTop: (state, action) => {
      const { index } = action.payload;
      state.page.splice(index, 0, {
        type: '',
        contentLayout: 0,
        src: [],
        link: [],
      });
    },
    putNewBlockBottom: (state, action) => {
      const { index } = action.payload;
      state.page.splice(index + 1, 0, {
        type: '',
        contentLayout: 0,
        src: [],
        link: [],
      });
    },
  },
});

export const {
  setInitialState,
  selectBlockIndex,
  updateTypeAndContentLayout,
  updateLink,
  updateSrc,
  moveUpBlock,
  moveDownBlock,
  putNewBlockTop,
  putNewBlockBottom,
} = sliceEditPage.actions;
export default sliceEditPage;
