import React from 'react';
import ReactDOM from 'react-dom';

import { API_KEY } from './config';

import App from './App';

// const renderTarget = document.getElementsByClassName('container')[0];
// const renderTarget = document.getElementById('app');
const renderTarget = document.querySelector('.container');

ReactDOM.render(
  <App />, renderTarget
);
