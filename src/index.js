import React from 'react';
import ReactDOM from 'react-dom';
import FullpageWrapper from './utility/FullpageWrapper';
import Preloader from './utility/Preloader';

ReactDOM.render(
  <Preloader>
    <FullpageWrapper />
  </Preloader>,
  document.getElementById('root')
);
