import { createSlice } from '@reduxjs/toolkit';

interface State {}
const initialState = {
  id: 123456,
  title: 'testTile',
  url: 'testUrl',
};
const sliceModal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    initalize: (state, action) => {
      state = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    clearModalState: (state) => {
      state.id = 0;
      state.title = '';
      state.url = '';
    },
  },
});

export const { initalize, setTitle, setUrl, clearModalState } =
  sliceModal.actions;
export default sliceModal;
