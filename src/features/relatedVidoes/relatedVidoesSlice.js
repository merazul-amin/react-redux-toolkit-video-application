import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRelatedVideos } from './relatedVidoesAPI';

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
};

// async thunk function
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchVideos', async ({ tags, id }) => {
    const relatedVideos = await getRelatedVideos({ tags, id });
    return relatedVideos;
})

const relatedVideoSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideos.pending, (state, action) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = action.payload;
            })
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedVideos = [];
                state.isError = true;
                state.error = action.error?.message;
            })
    }
});

export default relatedVideoSlice.reducer;