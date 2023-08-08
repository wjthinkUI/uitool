import { createSlice } from '@reduxjs/toolkit';

const sliceModalToggle = createSlice({
  name: 'modalToggle',
  initialState: {
    modalState: false,
    selectedBlockIndex: 0,
  },
  reducers: {
    modalToggle: (state) => {
      state.modalState = !state.modalState;
    },
    selectBlockIndex: (state, action) => {
      state.selectedBlockIndex = action.payload;
    },
  },
});

export const { modalToggle, selectBlockIndex } = sliceModalToggle.actions;
export default sliceModalToggle;
