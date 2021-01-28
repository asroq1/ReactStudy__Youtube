import React from 'react';
import styles from './video__item.module.css'; 
const VideoItem = ({ video }) => 
<li className={styles.container}>
    <div className={styles.video}>
          <img className={styles.thumbnail} src={video.snippet.thumbnails.medium.url} alt="video thumbnail"/>
         <div className={styles.metadata}>
               <p className={styles.title}>{video.snippet.title}</p>
                <p className={styles.channel}>{video.snippet.channerlTitle}</p>
         </div>
    </div>
</li>


export default VideoItem;