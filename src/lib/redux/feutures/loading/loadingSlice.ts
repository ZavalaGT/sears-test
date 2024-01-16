import { createSlice } from "@reduxjs/toolkit";

type LoadingTypes = {
  isLoading: boolean;
  isLoadingScanner: boolean;
};
const initialState: LoadingTypes = {
  isLoading: false,
  isLoadingScanner: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: () => ({ isLoading: true, isLoadingScanner: false }),
    endLoading: () => ({ isLoading: false, isLoadingScanner: false }),
  },
});

export const { startLoading, endLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
