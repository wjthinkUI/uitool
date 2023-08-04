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
};

const sliceEditPage = createSlice({
  name: 'editpage',
  initialState: initialState,
  reducers: {
    testUpate: (state, action) => {
      state.pageInfo.title = action.payload;
    },
    setInitialState: (state, action) => {
      state.pageInfo = action.payload.pageInfo;
      state.page = action.payload.page;
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
    blockInitialize: (state) => {
      state.page.push({
        index: state.page.length,
        type: '',
        contentLayout: 0,
        src: [],
        link: [],
      });
    },
  },
});

export const {
  testUpate,
  blockInitialize,
  setInitialState,
  updateTypeAndContentLayout,
  updateLink,
  updateSrc,
} = sliceEditPage.actions;
export default sliceEditPage;
