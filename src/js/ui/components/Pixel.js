import React from 'react';
import PropTypes from 'prop-types';

import { rgbToHex } from '../../core/utils';

function Pixel(props) {
  const { r = 0, g = 0, b = 0 } = props;

  const rgb = { r: r, g: g, b: b };

  return (
    <div className='pixel' style={{backgroundColor: `#${rgbToHex(rgb)}`}}>
      <span className='pixel-debug'>{`${rgbToHex(rgb)}`}</span>
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
