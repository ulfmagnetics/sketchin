// webpack-only
const React = require('react');
const ReactDOM = require('react-dom');
const HelloWorld = require('./HelloWorld');
const Comp = require('./Comp');

ReactDOM.render(
  <div className="container">
    <HelloWorld />
    
    <p>straight text</p>
    
    <Comp />
    
  </div>,
  document.querySelector("#main")
 );