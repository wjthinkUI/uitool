import { createSlice } from '@reduxjs/toolkit';

const sliceModalToggle = createSlice({
  name: 'modalToggle',
  initialState: {
    modalState: false,
    commonModalState: false,
    modalDetailState: null,
    modalDuplState: null,
    selectedBlockIndex: 0,
  },
  reducers: {
    blockModalToggle: (state) => {
      state.modalState = !state.modalState;
    },
    commonModalToggle: (state) => {
      state.commonModalState = !state.commonModalState;
    },
    ModalDetailOpen: (state, action) => {
      state.modalDetailState = action.payload;
    },
    ModalDuplOpen: (state, action) => {
      state.modalDuplState = action.payload;
    },
    closeAll: (state) => {
      state.modalState = false;
      state.commonModalState = false;
      state.modalDetailState = null;
      state.modalDuplState = null;
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
  ModalDetailOpen,
  ModalDuplOpen,
  closeAll,
} = sliceModalToggle.actions;
export default sliceModalToggle;
