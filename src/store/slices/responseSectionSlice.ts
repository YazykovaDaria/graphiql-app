/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ResponseSliceState = {
  isPlay: boolean;
};

const initialState: ResponseSliceState = {
  isPlay: false,
};

const responseSectionSlice = createSlice({
  name: 'responseSlice',
  initialState,
  reducers: {
    togglePlay(state, action: PayloadAction<boolean>) {
      state.isPlay = action.payload;
    },
  },
});

export const { togglePlay } = responseSectionSlice.actions;

export default responseSectionSlice.reducer;
