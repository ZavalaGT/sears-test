import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// ...
import loadingReducer from "./feutures/loading/loadingSlice";
import videoReducer from "./feutures/video/videoSlice";

const store = configureStore({
  reducer: {
    video: videoReducer,
    loading: loadingReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
