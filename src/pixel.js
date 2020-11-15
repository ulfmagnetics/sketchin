import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Pixel(props) {
  const { r = 0, g = 0, b = 0 } = props;
  
  const [rgb, setRgb] = useState([r,g,b]);
  
  
  
  return (
    <div class='pixel' style={"color: "}></div>
  );
}

Pixel.propTypes = {
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
}