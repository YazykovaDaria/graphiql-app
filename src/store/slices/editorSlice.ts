/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type EditorSliceState = {
  query: string;
  variables: string;
  headers: string;
};

const initialState: EditorSliceState = {
  query: '',
  variables: '{}',
  headers: '',
};

const editorSlice = createSlice({
  name: 'editorSlice',
  initialState,
  reducers: {
    updateQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    updateVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },
    updateHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },
  },
});

export const { updateQuery, updateHeaders, updateVariables } = editorSlice.actions;

export default editorSlice.reducer;
