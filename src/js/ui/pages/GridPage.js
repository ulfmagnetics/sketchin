import React, { useState, useEffect } from 'react';

import Page from '../../core/hocs/Page';
import Bitmap, { bitmapWithGradient } from '../../models/Bitmap';
import Matrix from '../../ui/components/Matrix';
import Controls from '../../ui/components/Controls';

function GridPage(props) {
  const [numRows, setNumRows] = useState(32);
  const [numCols, setNumCols] = useState(64);
  const [bitmap, setBitmap] = useState(new Bitmap(numRows, numCols));
  
  useEffect(() => {
    console.log('GridPage: props=', props);
  });
  
  const onControlClicked = (e) => {
    const controlType = e.target.getAttribute('data-control-type');

    e.preventDefault();
    if (controlType == 'gradient') {
      setBitmap(bitmapWithGradient(numRows, numCols));
    }
    else if (controlType == 'reset') {
      setBitmap(new Bitmap(numRows, numCols));
    }
    else if (controlType == 'publish') {
      //publishBitmap(bitmap);
    }
  };
  
  return (
    <div className="container">
      <Matrix rows={numRows} cols={numCols} data={bitmap.toArray()} />
      <Controls onClick={onControlClicked} />
    </div>
  );
}
  
export default Page(GridPage);