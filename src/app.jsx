
import './app.css';
import React, { useEffect, useState } from 'react';
import VideoList from './components/video_list/video__list';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCeJxrDd7dd9RaAm8F2h9Dc01OkMrXaoac",
         requestOptions)

      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  } , []);

  return <VideoList 
  key={videos.id} 
  videos={videos} />;

};

export default App 

