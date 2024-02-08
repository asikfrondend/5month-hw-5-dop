import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../usersSlice/UsersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;