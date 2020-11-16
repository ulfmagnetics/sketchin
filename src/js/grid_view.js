import React, { useState, useEffect } from 'react';

import Matrix from './matrix';
import Controls from './controls';

function fillGrid(rows, cols, r, g, b) {
  return Array(rows).fill({ r, g, b }).map(() => new Array(cols).fill({ r, g, b }));
}

function GridView() {
  const [numRows, setNumRows] = useState(32);
  const [numCols, setNumCols] = useState(64);
  const [matrixData, setMatrixData] = useState(fillGrid(numRows, numCols, 0, 0, 0));
  
  const onControlClicked = (e) => {
    const controlType = e.target.getAttribute('data-control-type');

    e.preventDefault();
    console.log('onControlClicked: type=', controlType);
    if (controlType == 'gradient') {
      setMatrixData(fillGrid(numRows, numCols, 128, 0, 128));
    }
    else if (controlType == 'reset') {
      setMatrixData(fillGrid(numRows, numCols, 0, 0, 0));
    }
  };
  
  return (
    <div className="container">
      <Matrix rows={numRows} cols={numCols} matrixData={matrixData} />
      <Controls onClick={onControlClicked} />
    </div>
  );
}
  
export default GridView;