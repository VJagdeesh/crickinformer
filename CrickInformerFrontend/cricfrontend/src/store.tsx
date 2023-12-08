import { configureStore } from "@reduxjs/toolkit";
import { scoreApi } from "./services/scoresApi";

export const store=configureStore({
reducer:{
[scoreApi.reducerPath]:scoreApi.reducer
},
middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(scoreApi.middleware)
});