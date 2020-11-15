import React from 'react';
import ReactDOM from 'react-dom';

import Matrix from './matrix';

import '../css/main.scss';

// TODO: expose matrix size props in the UI

ReactDOM.render(
  <div className="container">
    <Matrix rows={32} cols={64} />
  </div>,
  document.querySelector("#main")
);
