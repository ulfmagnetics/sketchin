import React, { useState, useEffect } from 'react';

import Bitmap, { bitmapWithGradient } from 'models/Bitmap';
import Matrix from 'ui/components/Matrix';
import Controls from 'ui/components/Controls';

function GridPage() {
  const [numRows, setNumRows] = useState(32);
  const [numCols, setNumCols] = useState(64);
  const [bitmap, setBitmap] = useState(new Bitmap());
  
  useEffect(() => {
    // TODO: do something with the bitmap here?
  });
  
  const onControlClicked = (e) => {
    const controlType = e.target.getAttribute('data-control-type');

    e.preventDefault();
    if (controlType == 'gradient') {
      setBitmap(bitmapWithGradient(numRows, numCols));
    }
    else if (controlType == 'reset') {
      setBitmap(new Bitmap());
    }
    else if (controlType == 'publish') {
      
    }
  };
  
  return (
    <div className="container">
      <Matrix data={bitmap.toArray()} />
      <Controls onClick={onControlClicked} />
    </div>
  );
}
  
export default GridPage;