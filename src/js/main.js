import React from 'react';
import ReactDOM from 'react-dom';

import SketchinPage from './sketchin_page';

import '../css/main.scss';

// TODO: expose matrix size props in the UI

ReactDOM.render(
  <div className="container">
    <SketchinPage />
  </div>,
  document.querySelector("#main")
);
