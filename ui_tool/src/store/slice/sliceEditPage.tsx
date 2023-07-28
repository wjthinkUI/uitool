import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageInfo: {
    key: 0,
    title: 'test',
    path: '/test',
    date: Date(),
  },
  page: [
    {
      block: [
        {
          type: '',
          detail: '',
          layout: '',
          chidren: [],
        },
      ],
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
