import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './like_button';

ReactDOM.render(
  <div className="container">
    <LikeButton />

    <p>Do you still react to me?</p>
  </div>,
  document.querySelector("#main")
);
