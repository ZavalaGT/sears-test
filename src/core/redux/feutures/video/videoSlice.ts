import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type VideoTypes = {
  videoSrc: string;
};
const initialState: VideoTypes = {
  videoSrc: "2uZjsHFob5s",
};

const VideoSlice = createSlice({
  name: "Video",
  initialState,
  reducers: {
    setVideo: (state, action: PayloadAction<string>) => {
      state.videoSrc = action.payload;
    },
    resetVideo: () => ({ ...initialState }),
  },
});

export const { setVideo, resetVideo } = VideoSlice.actions;
export default VideoSlice.reducer;
