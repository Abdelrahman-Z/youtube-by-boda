import { configureStore } from "@reduxjs/toolkit";
import { YoutubeApi } from "./services/youtubeApi";
export const store = configureStore({
    reducer: {
        [YoutubeApi.reducerPath] : YoutubeApi.reducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(YoutubeApi.middleware)
})