import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageInfo: {
    id: 0,
    title: 'test',
    path: '/test',
    category: 'test',
    date: Date(),
  },
  page: [
    {
          index: 0,
          type: '',
          layoutTable: [],
          layout: 1,
    },
  ],
};

const sliceEditPage = createSlice({
  name: 'editpage',
  initialState: initialState,
  reducers: {},
});

export const {} = sliceEditPage.actions;
export default sliceEditPage;
