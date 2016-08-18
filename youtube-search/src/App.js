import React from 'react';

import { API_KEY } from './config';
import Promise from 'bluebird';
import { debounce, throttle } from 'lodash';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

import YoutubeSearch from 'youtube-api-search';
const YTSearch = Promise.promisify(YoutubeSearch);


const App = React.createClass({
  getInitialState() {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  _searchVideos(term) {
    YoutubeSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  },

  _selectVideo(selectedVideo) {
    this.setState({
      selectedVideo
    });
  },
  componentWillMount() {
    this._searchVideos('last week tonight');
  },
  render() {
    const debouncedVideoSearch = debounce((term) => this._searchVideos(term), 500, { leading: false });

    return (
      <div>
        <SearchBar onSearchTermChange={debouncedVideoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
          onVideoSelect={this._selectVideo}
        />
      </div>
    );
  }
});

export default App;
