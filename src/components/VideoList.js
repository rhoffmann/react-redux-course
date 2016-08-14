import React from 'react';
import VideoListItem from './VideoListItem';

const listItems = ["1", "2", "3"];

const VideoList = () => {
  return (
    <div>
      <h2>VideoList</h2>
      {listItems.map(item => <VideoListItem key={item} data={item} />)}
    </div>
  );
}

export default VideoList;
