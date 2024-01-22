import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setTokens, getTokens } from "../../utils";
import { API_PATH, login } from "../../services/auth";

const initialState = {
  user: getTokens().auth
};

export const loginAuth = createAsyncThunk(`${API_PATH}/login`, async user => {
  const res = await login(user);
  return res;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    }
  },
  extraReducers: {
    [loginAuth.fulfilled]: (state, { payload }) => {
      if (payload.status) {
        setTokens(payload.token, payload.token);
        state.user = payload;
      }
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
