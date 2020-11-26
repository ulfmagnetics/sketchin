import React from 'react';
import ReactDOM from 'react-dom';

import GridPage from './ui/pages/GridPage';

import '../css/main.scss';

// TODO: expose matrix size props in the UI

ReactDOM.render(
  <div className="container">
    <GridPage />
  </div>,
  document.querySelector("#main")
);
