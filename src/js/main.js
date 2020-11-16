import React from 'react';
import ReactDOM from 'react-dom';

import Matrix from './matrix';
import Controls from './controls';

import '../css/main.scss';

// TODO: expose matrix size props in the UI

function onControlClicked(e) {
  const controlType = e.target.getAttribute('data-control-type');

  e.preventDefault();
  console.log('onControlClicked: type=', controlType);
  if (controlType == 'gradient') {
    // TODO: somehow set the data in the matrix to a rainbow gradient 
  }
}

ReactDOM.render(
  <div className="container">
    <Matrix rows={32} cols={64} />
    <Controls onClick={onControlClicked} />
  </div>,
  document.querySelector("#main")
);
