import {configureStore} from "@reduxjs/toolkit";
import  callSlice  from "./features/callsSlice";


export const store = configureStore({
  reducer: {
    callSlice,
  },
});