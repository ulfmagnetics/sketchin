import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Pixel from './pixel';

function initialData({ rows, cols }) {
  return Array(rows).fill({ r: 0, g: 0, b: 0 }).map(() => new Array(cols).fill({ r: 0, g: 0, b: 0 }));
}

function renderRow(row, x) {
  return row.map((rgb, y) => (
    <Pixel key={`${x}-${y}`} x={x} y={y} r={rgb.r} g={rgb.g} b={rgb.b} />
  ));
}

function Matrix(props) {
  const [currentData, setData] = useState(initialData(props));  
  const { rows, cols, data: nextData } = props;
  
  useEffect(() => {
    if (nextData) {
      setData(nextData);    
    }
  });
    
  return (
    <div className='matrix-container'>
      <div className='matrix-grid' style={{'--cols': cols}}>
        {currentData.flatMap((row, x) => renderRow(row, x))}
      </div>
    </div>
  );
}

Matrix.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  data: PropTypes.array,
};

export default Matrix;
