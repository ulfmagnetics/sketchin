import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Pixel from './pixel';

function renderRow(row, x) {
  return row.map((rgb, y) => (
    <Pixel key={`${x}-${y}`} x={x} y={y} r={rgb.r} g={rgb.g} b={rgb.b} />
  ));
}

function Matrix(props) {
  const { rows, cols, data } = props;
    
  return (
    <div className='matrix-container'>
      <div className='matrix-grid' style={{'--cols': cols}}>
        {data.flatMap((row, x) => renderRow(row, x))}
      </div>
    </div>
  );
}

Matrix.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default Matrix;
