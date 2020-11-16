import React from 'react';
import PropTypes from 'prop-types';

function Pixel(props) {
  const { x, y, r = 0, g = 0, b = 0, debug = true } = props;
  
  const zeroPad = (num, padding = 2) => ("0".repeat(padding) + num).slice(-padding); 
    
  const rgbHex = `${zeroPad(r.toString(16))}${zeroPad(g.toString(16))}${zeroPad(b.toString(16))}`;
  
  return (
    <div className='pixel' style={{backgroundColor: `#${rgbHex}`}}>
      {debug && `${rgbHex}`}
    </div>
  );
}

Pixel.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
  debug: PropTypes.bool,
}

export default Pixel;