import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// const renderTarget = document.getElementsByClassName('container')[0];
// const renderTarget = document.getElementById('app');
// const renderTarget = document.querySelectorAll('.container')[0];
const renderTarget = document.querySelector('.container');

ReactDOM.render(
  <App />, renderTarget
);
