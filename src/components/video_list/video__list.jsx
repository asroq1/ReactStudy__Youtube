import React from 'react';
import VideoItem from '../video_item/video__item';

const VideoList = (props) => (
    <ul>
        {props.videos.map(video =>(
             <VideoItem video={video} />
        ))}
    </ul>
);
        
    

export default VideoList;