import React, { useState } from 'react';

function initialData({ rows = 64, cols = 32}) {
  return Array(rows).fill(0).map(() => new Array(cols).fill(0));
}

function Matrix(props) {
  // TODO: add property constraints
  const [data, setData] = useState(initialData(props));  
  
  console.log(data);
  
  return (
    <h1>welcome to the matrix</h1>
  )
}

export default Matrix;
