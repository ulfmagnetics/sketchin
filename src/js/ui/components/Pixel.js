import React from 'react';
import PropTypes from 'prop-types';

import { rgbToHex } from '../../core/utils';

function Pixel(props) {
  const { x, y, r = 0, g = 0, b = 0, debug = true } = props;

  const rgb = { r: r, g: g, b: b };

  return (
    <div className='pixel' style={{backgroundColor: `#${rgbToHex(rgb)}`}}>
      {debug && `${rgbToHex(rgb)}`}
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
