import React from 'react';
import ReactDOM from 'react-dom';

import LikeButton from './like_button';
import Matrix from './matrix';

ReactDOM.render(
  <div className="container">
    <Matrix />
  </div>,
  document.querySelector("#main")
);
