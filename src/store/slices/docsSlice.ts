/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Scheema = Record<string, unknown>;

type DocsRout = {
  name: string;
  type?: string;
};

type ResponseSliceState = {
  isOpen: boolean;
  scheema: Scheema;
  rout: DocsRout[];
};

const initialState: ResponseSliceState = {
  isOpen: false,
  scheema: {},
  rout: [
    {
      name: 'Query',
      type: 'main',
    },
  ],
};

const docsSlice = createSlice({
  name: 'docsSlice',
  initialState,
  reducers: {
    toggleOpen(state) {
      state.isOpen = !state.isOpen;
    },
    addScheema(state, action: PayloadAction<Scheema>) {
      state.scheema = action.payload;
    },
    addRout(state, action: PayloadAction<DocsRout>) {
      state.rout.push(action.payload);
    },
    delRout(state) {
      state.rout.pop();
    },
  },
});

export const { toggleOpen, addScheema, addRout, delRout } = docsSlice.actions;

export default docsSlice.reducer;
