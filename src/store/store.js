import { configureStore } from "@reduxjs/toolkit";
import user from "./userInfo";

export const store = configureStore({
  reducer: {
    userInfo: user,
  },
});
