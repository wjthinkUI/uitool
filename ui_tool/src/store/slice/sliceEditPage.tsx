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
      src: [],
      link: [],
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
          type: 'initial',
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
      if (index >= 0 && index < state.page.length) {
        state.page[index].type = type;
        state.page[index].contentLayout = contentLayout;
      }
    },
    updateSrc: (state, action) => {
      const { index, src } = action.payload;
      state.page[index].src = src;
    },
    updateLink: (state, action) => {
      const { index, link } = action.payload;
      state.page[index].link = link;
    },
    moveUpBlock: (state, action) => {
      const { index } = action.payload;
      if (index <= 0) return;
      const pageCopy = [...state.page];
      const temp = pageCopy[index];
      pageCopy[index] = pageCopy[index - 1];
      pageCopy[index - 1] = temp;
      state.page = pageCopy;
    },
    moveDownBlock: (state, action) => {
      const { index } = action.payload;
      if (index >= state.page.length - 1) return;
      const pageCopy = [...state.page];
      const temp = pageCopy[index];
      pageCopy[index] = pageCopy[index + 1];
      pageCopy[index + 1] = temp;
      state.page = pageCopy;
    },
    
    deleteBlock: (state, action) => {
      const { index } = action.payload;
      if (state.page.length === 1) return state;
      const filteredPage = state.page.filter((_, idx) => idx !== index);
      state.page = filteredPage;
    },
    putNewBlockTop: (state, action) => {
      const { index } = action.payload;
      if (index < 0 || index >= state.page.length) return state;
      state.page.splice(index, 0, {
        type: 'initial',
        contentLayout: 0,
        src: [],
        link: [],
      });
    },
    putNewBlockBottom: (state, action) => {
      const { index } = action.payload;
      if (index < 0 || index >= state.page.length) return state;
      state.page.splice(index + 1, 0, {
        type: 'initial',
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
  deleteBlock,
  putNewBlockTop,
  putNewBlockBottom,
} = sliceEditPage.actions;
export default sliceEditPage;
