import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Pixel(props) {
  const { r = 0, g = 0, b = 0 } = props;
  
  const [rgb, setRgb] = useState([r,g,b]);
  
  const rgbHex = `${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  
  return (
    <li className='pixel' style={{backgroundColor: `#${rgbHex}`}}></li>
  );
}

Pixel.propTypes = {
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
}

export default Pixel;