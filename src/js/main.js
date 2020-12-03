import React from 'react';
import ReactDOM from 'react-dom';
import Amplify, { Storage } from 'aws-amplify';
import AWSConfig from './config/aws-exports';

import GridPage from './ui/pages/GridPage';

import '../css/main.scss';

Amplify.configure(AWSConfig);
Storage.configure({ level: 'protected'});

// TODO: add an error boundary

ReactDOM.render(
  <div className="container-fluid">
    <GridPage />
  </div>,
  document.querySelector("#main")
);
