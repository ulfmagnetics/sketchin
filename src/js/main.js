import React from 'react';
import ReactDOM from 'react-dom';

import GridView from './grid_view';

import '../css/main.scss';

// TODO: expose matrix size props in the UI

ReactDOM.render(
  <div className="container">
    <GridView />
  </div>,
  document.querySelector("#main")
);
