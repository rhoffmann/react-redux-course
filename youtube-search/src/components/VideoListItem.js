import React from 'react';
import classnames from 'classnames';

const VideoListItem = ({ video, onVideoClick, selectedVideo }) => {
  const { snippet } = video;
  const imageUrl = snippet.thumbnails.default.url;
  const isVideoSelected = selectedVideo.id.videoId === video.id.videoId;
  
  return(
    <li
      className={classnames('list-group-item', { 'active' : isVideoSelected })}
      onClick={() => onVideoClick(video)}
    >
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {snippet.title}
          </div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
