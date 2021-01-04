import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { v4 as uuid } from 'uuid';

function Controls(props) {
  const { onClick } = props;
  const [imageFile, setImageFile] = useState();

  const onFileChange = (e) => {
    console.log(imageFile);
    setImageFile(e.target.files[0]);
    const uuid = uuid();

  };

  return (
    <ul className='controls'>
      <li><button data-control-type='gradient1' onClick={onClick}>Gradient 1</button></li>
      <li><button data-control-type='gradient2' onClick={onClick}>Gradient 2</button></li>
      <li><button data-control-type='reset' onClick={onClick}>Reset</button></li>
      <li>
        <input type="file" onChange={onFileChange} />
        <button data-control-type='import'>Import</button>
      </li>
      <li><button data-control-type='publish' onClick={onClick}>Publish</button></li>
      <li><AmplifySignOut /></li>
    </ul>
  );
}

Controls.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Controls;
