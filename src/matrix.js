import React, { useState } from 'react';
import PropTypes from 'prop-types';

function initialData({ rows, cols }) {
  return Array(rows).fill(0).map(() => new Array(cols).fill(0));
}

function Matrix(props) {
  const [data, setData] = useState(initialData(props));  
    
  return (
    <h1>welcome to the matrix</h1>
  );
}

Matrix.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
}

export default Matrix;
