import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';

//mine
function App({ youtube }) {
  const [videos, setVideos] = useState([]);
 
  const search = query => {
    youtube
      .search(query) //
      .then(console.log('Searching ...'))
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(console.log('Load Contents ...'))
      .then(videos => setVideos(videos));
  }, []);
  
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
