import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Headers = {
  [key: string]: string;
};

type EditorSliceState = {
  query: string;
  variables: string;
  headers: Headers;
};

export const initHeaders: Headers = {
  'Content-type': 'application/json',
};

const initialState: EditorSliceState = {
  query: '',
  variables: '{}',
  headers: initHeaders,
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
    updateHeaders(state, action: PayloadAction<Headers>) {
      state.headers = action.payload;
    },
  },
});

export const { updateQuery, updateHeaders, updateVariables } = editorSlice.actions;

export default editorSlice.reducer;
