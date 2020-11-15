import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Pixel from './pixel';

function initialData({ rows, cols }) {
  return Array(rows).fill({ r: 0, g: 0, b: 0 }).map(() => new Array(cols).fill({ r: 0, g: 0, b: 0 }));
}

function Matrix(props) {
  const [data, setData] = useState(initialData(props));  
    
  return (
    <div className='matrix-container'>
      <h1>welcome to the matrix</h1>
      <div className='matrix-data'>
        {data.flatMap(row => 
          row.map(rgb => {
            return <Pixel r={rgb.r} g={rgb.g} b={rgb.b} />;
          })
        )}
      </div>
    </div>
  );
}

Matrix.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
}

export default Matrix;
