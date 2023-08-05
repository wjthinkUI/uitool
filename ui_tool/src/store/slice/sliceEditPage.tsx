import { createSlice } from '@reduxjs/toolkit';
let initialState = {
  pageInfo: {
    id: 0,
    title: '',
    path: '',
    date: '',
    category: '',
  },
  page: [
    {
      index: 0,
      type: '',
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

      //빈페이지 일경우
      if (state.page.length === 0) {
        state.page.push({
          index: 0,
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
      state.page[index].src = src;
    },
    updateLink: (state, action) => {
      const { index, link } = action.payload;
      state.page[index].link = link;
    },
    moveUpBlock: (state, action) => {
      const { index } = action.payload;
      if (index === 0) return state;
      const temp = state.page[index];
      state.page[index] = state.page[index - 1];
      state.page[index].index = index;
      state.page[index - 1] = temp;
      state.page[index - 1].index = index - 1;
    },
    moveDownBlock: (state, action) => {
      const { index } = action.payload;
      if (index === state.page.length - 1) return state;
      const temp = state.page[index];
      state.page[index] = state.page[index + 1];
      state.page[index].index = index;
      state.page[index + 1] = temp;
      state.page[index + 1].index = index + 1;
    },
    deleteBlock: (state, action) => {
      const { index } = action.payload;
      const filteredPage = state.page.filter((_, idx) => idx !== index);
      state.page = filteredPage;
      state.page.forEach((block, idx) => {
        block.index = idx;
      });
    },
  },
});

export const {
  blockInitialize,
  setInitialState,
  selectBlockIndex,
  updateTypeAndContentLayout,
  updateLink,
  updateSrc,
  moveUpBlock,
  moveDownBlock,
} = sliceEditPage.actions;
export default sliceEditPage;
