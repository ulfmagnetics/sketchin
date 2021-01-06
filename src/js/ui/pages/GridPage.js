import React, { useState } from 'react';
//import { v4 as uuid } from 'uuid';

//import { uploadFile } from '../../lib/storage';

import Page from '../../core/hocs/Page';
import Bitmap, { bitmapWithGradient } from '../../models/Bitmap';
import Matrix from '../../ui/components/Matrix';
import Controls from '../../ui/components/Controls';
import Modal from '../../ui/components/Modal';

function GridPage() {
  const [numRows] = useState(32);
  const [numCols] = useState(64);
  const [bitmap, setBitmap] = useState(new Bitmap(numRows, numCols));
  const [importedFile, setImportedFile] = useState();

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

  const onFileChange = (e) => {
    setImportedFile(e.target.files[0]);

    return false; // FIXME: for testing only

    //const basename = uuid();
    //const uuid = uploadFile(basename, importedFile).
    //  then((result) => console.log(result)).
    //  catch((err) => console.log(err));
  };

  const displayModal = () => !!importedFile;

  return (
    <div className="grid-container">
      <Modal visible={displayModal} />
      <div className="row">
        <div className="col-sm">
          <Matrix rows={numRows} cols={numCols} data={bitmap.getData()} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Controls onClick={onControlClicked} onFileChange={onFileChange} />
        </div>
      </div>
    </div>
  );
}

export default Page(GridPage);
