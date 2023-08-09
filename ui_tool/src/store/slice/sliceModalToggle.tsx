import { createSlice } from '@reduxjs/toolkit';

const sliceModalToggle = createSlice({
  name: 'modalToggle',
  initialState: {
    modalState: false,
    commonModalState: false,
    selectedBlockIndex: 0,
  },
  reducers: {
    blockModalToggle: (state) => {
      state.modalState = !state.modalState;
    },
    commonModalToggle: (state) => {
      state.commonModalState = !state.commonModalState;
    },
    backDrop: (state) => {
      state.modalState = false;
      state.commonModalState = false;
    },
    selectBlockIndex: (state, action) => {
      state.selectedBlockIndex = action.payload;
    },
  },
});

export const {
  blockModalToggle,
  selectBlockIndex,
  commonModalToggle,
  backDrop,
} = sliceModalToggle.actions;
export default sliceModalToggle;
