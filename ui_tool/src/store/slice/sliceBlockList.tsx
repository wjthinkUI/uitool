import { createSlice } from '@reduxjs/toolkit';

const sliceBlockList = createSlice({
  name: 'blockList',
  initialState: {
    page: [
      {
        src: [{}],
      },
    ],
  },
  reducers: {
    updateListSrc: (state, action) => {
      const { index, src } = action.payload;
      const srcIndex = src.srcIndex;
      // const hasData = state.page[index].src.find(
      //   (item) => item.imageSrc === src.imageSrc
      // );
      // if (!hasData)
      state.page[index].src[srcIndex] = src;
    },
  },
});

export const { updateListSrc } = sliceBlockList.actions;
export default sliceBlockList;
