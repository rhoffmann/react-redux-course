import React, { PropTypes } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect, selectedVideo }) => {
  return (
    <div className='col-md-4'>
      <h2>VideoList</h2>
      <ul className='list-group'>
        {videos.map(video =>
          <VideoListItem
            selectedVideo={selectedVideo}
            onVideoClick={onVideoSelect}
            key={video.etag}
            video={video}
          />
        )}
      </ul>
    </div>
  );
}

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
};

export default VideoList;
