import React, { useState, useEffect } from 'react';

import Matrix from './matrix';
import Controls from './controls';
import { fillGrid, fillWithGradient } from './utils';

function GridView() {
  const [numRows, setNumRows] = useState(32);
  const [numCols, setNumCols] = useState(64);
  const [matrixData, setMatrixData] = useState(fillGrid(numRows, numCols, 0, 0, 0));
  
  const onControlClicked = (e) => {
    const controlType = e.target.getAttribute('data-control-type');

    e.preventDefault();
    if (controlType == 'gradient') {
      setMatrixData(fillWithGradient(numRows, numCols));
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