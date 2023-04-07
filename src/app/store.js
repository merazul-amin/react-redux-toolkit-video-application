import { configureStore } from '@reduxjs/toolkit';
import tagsReducer from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/videosSlice'
import videoReducer from '../features/video/videoSlice'
import relatedVideoReducer from '../features/relatedVidoes/relatedVidoesSlice'
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideoReducer
  },
});
