import { createSlice } from '@reduxjs/toolkit';

const validate = ['image', 'line', 'list', 'text', 'table', 'layout'];

const sliceBlockDesignSideBar = createSlice({
  name: 'sidebar',
  initialState: {
    selectItem: '',
    modalCancel: () => {},
  },
  reducers: {
    setDesign: (state, action) => {
      const type = action.payload.type;
      if (validate.includes(type)) {
        state.selectItem = type;
      } else {
        throw Error('invalid payload type, try again...');
      }
    },
    closeBlockDesignModal: (state, action) => {
      state.modalCancel = action.payload;
    },
  },
});

export const { setDesign, closeBlockDesignModal } =
  sliceBlockDesignSideBar.actions;
export default sliceBlockDesignSideBar;
