import React, { useState } from 'react';

import Page from '../../core/hocs/Page';
import Bitmap, { bitmapWithGradient } from '../../models/Bitmap';
import Matrix from '../../ui/components/Matrix';
import Controls from '../../ui/components/Controls';

function GridPage() {
  const [numRows] = useState(32);
  const [numCols] = useState(64);
  const [bitmap, setBitmap] = useState(new Bitmap(numRows, numCols));

  const onControlClicked = (e) => {
    const controlType = e.target.getAttribute('data-control-type');

    e.preventDefault();
    if (controlType == 'gradient1') {
      setBitmap(bitmapWithGradient(numRows, numCols, { index: 0 }));
    }
    else if (controlType == 'gradient2') {
      setBitmap(bitmapWithGradient(numRows, numCols, { index: 1 }));
    }
    else if (controlType == 'reset') {
      setBitmap(new Bitmap(numRows, numCols));
    }
    else if (controlType == 'publish') {
      bitmap.publish();
    }
  };

  return (
    <div className="grid-container">
      <div className="row">
        <div className="col-sm">
          <Matrix rows={numRows} cols={numCols} data={bitmap.getData()} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Controls onClick={onControlClicked} />
        </div>
      </div>
    </div>
  );
}

export default Page(GridPage);
