import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
export default store;
