import { createSlice } from '@reduxjs/toolkit';

interface State {}
const initialState = {
  id: 123456,
  title: '',
  url: '',
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
  },
});

export const { initalize, setTitle, setUrl } = sliceModal.actions;
export default sliceModal;
