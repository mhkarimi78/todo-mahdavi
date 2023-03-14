import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    familyName: "",
    age: null,
  },
};

export const user = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;

export const selectUser = (state) => state.userInfo.data;

export default user.reducer;
