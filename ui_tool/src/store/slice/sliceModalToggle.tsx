import { createSlice } from '@reduxjs/toolkit';

const sliceModalToggle = createSlice({
  name: 'modalToggle',
  initialState: {
    modalState: false,
    commonModalState: null,
    modalDetailState: null,
    modalDuplState: null,
    selectedBlockIndex: 0,
  },
  reducers: {
    blockModalToggle: (state) => {
      state.modalState = !state.modalState;
    },
    commonModalToggle: (state, action) => {
      state.commonModalState = action.payload;
    },
    ModalDetailOpen: (state, action) => {
      state.modalDetailState = action.payload;
    },
    ModalDuplOpen: (state, action) => {
      state.modalDuplState = action.payload;
    },
    closeAll: (state) => {
      state.modalState = false;
      state.commonModalState = null;
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
