import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';

import GridPage from './ui/pages/GridPage';

import '../css/main.scss';

Amplify.configure(awsmobile);

ReactDOM.render(
  <div className="container">
    <GridPage />
  </div>,
  document.querySelector("#main")
);
