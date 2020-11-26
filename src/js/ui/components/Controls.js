import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Controls(props) {
  const { onClick } = props;
  
  return (
    <ul className='controls'>
      <li><button data-control-type='gradient' onClick={onClick}>Gradient</button></li>
      <li><button data-control-type='reset' onClick={onClick}>Reset</button></li>
      <li><button data-control-type='publish' onClick={onClick}>Publish</button></li>
    </ul>
  );
}

Controls.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Controls;