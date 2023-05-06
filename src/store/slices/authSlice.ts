import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthSliceState = {
  token: string;
};

const initialState: AuthSliceState = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<string>) {
      const currentState = state;
      currentState.token = action.payload;
    },
    removeCredentials(state) {
      const currentState = state;
      currentState.token = '';
    },
  },
});

export const { setCredentials, removeCredentials } = authSlice.actions;
export default authSlice.reducer;
