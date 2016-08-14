import React from 'react';

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const App = () => {
  return (
    <div>
      <SearchBar />
      <VideoDetail />
      <VideoList />
    </div>
  );
}

export default App;
