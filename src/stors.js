import { configureStore } from "@reduxjs/toolkit";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'

import CartSlice from "./screens/CartSlice";
import userSlice from "./userSlice";
export const store = configureStore({
  reducer: {
    /* count: countReducer */
    cart: CartSlice,
    user: userSlice,
  },
});