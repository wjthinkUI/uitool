import { createSlice } from '@reduxjs/toolkit';

const sliceModalToggle = createSlice({
  name: 'modalToggle',
  initialState: {
    modalState: false,
  },
  reducers: {
    modalToggle: (state) => {
      state.modalState = !state.modalState;
    },
  },
});

export const { modalToggle } = sliceModalToggle.actions;
export default sliceModalToggle;
