import React, { useState, useEffect } from 'react';

import Matrix from './matrix';
import Controls from './controls';

function SketchinPage() {
  const onControlClicked( {
  const controlType = e.target.getAttribute('data-control-type');

  e.preventDefault();
  console.log('onControlClicked: type=', controlType);
  if (controlType == 'gradient') {
    // TODO: somehow set the data in the matrix to a rainbow gradient 
  }
}

  
  return (
    <div className="container">
      <Matrix rows={32} cols={64} />
      <Controls onClick={onControlClicked} />
    </div>
  );
}
  
export default SketchinPage;