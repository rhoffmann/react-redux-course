import React from 'react';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

const App = () => {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  );
};

export default App;
