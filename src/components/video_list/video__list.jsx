import React from 'react';
import VideoItem from '../video_item/video__item';
import styles from './video__list.module.css';
const VideoList = (props) => (
    <ul className={styles.videos}>
        {props.videos.map(video =>(
             <VideoItem 
             key={video.key}
             video={video} />
        ))}
    </ul>
);
        
    

export default VideoList;