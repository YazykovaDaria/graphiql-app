import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Scheema = Record<string, unknown>;

type ResponseSliceState = {
  isOpen: boolean;
  scheema: Scheema;
  rout: string[];
};

export const mainRout = 'Query';

const initialState: ResponseSliceState = {
  isOpen: false,
  scheema: {},
  rout: [mainRout],
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
    addRout(state, action: PayloadAction<string>) {
      state.rout.push(action.payload);
    },
    delRout(state) {
      state.rout.pop();
    },
  },
});

export const { toggleOpen, addScheema, addRout, delRout } = docsSlice.actions;

export default docsSlice.reducer;
