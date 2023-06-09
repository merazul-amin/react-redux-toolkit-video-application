import React, { useEffect } from 'react';
import VideoGridItem from './VideoGridItem';
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../ui/Loading';

const VideoGrid = () => {
    const dispatch = useDispatch()
    const { videos, isLoading, isError, error } = useSelector(state => state.videos);
    useEffect(() => {
        dispatch(fetchVideos())
    }, [dispatch]);
    //decide what to render
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading && error) content = <div className="col-span-12">{error}</div>
    if (!isError && !isLoading && videos?.length === 0) {
        content = <div className="col-span-12">No videos Found</div>
    }
    if (!isError && !isLoading && videos?.length > 0) {
        content = videos.map(video => <VideoGridItem key={video.id} video={video} />)
    }
    return (
        <div>
            <section className="pt-12">
                <section className="pt-12">
                    <div
                        className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                    >
                        {content}
                        {/* <VideoGridItem /> */}
                        {/* <div className="col-span-12">some error happened</div> */}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default VideoGrid;