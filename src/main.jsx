// webpack-only
const React = require("react");
import ReactDOM from 'react-dom';
import LikeButton from 'like_button';

ReactDOM.render(
  <div className="container">
    <LikeButton />

    <p>Do you like me?</p>

    <Comp />
  </div>,
  document.querySelector("#main")
);
