import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Auth } from 'aws-amplify';
//import awsconfig from './aws-exports';

import GridPage from './ui/pages/GridPage';

import '../css/main.scss';

//Amplify.configure(awsconfig);

ReactDOM.render(
  <div className="container">
    <GridPage />
  </div>,
  document.querySelector("#main")
);
