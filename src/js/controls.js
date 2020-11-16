import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Controls(props) {
  const { onClick } = props;
  
  return (
    <div id='controls'>
      <button data-control-type='gradient' onClick={onClick}>Gradient</button>
    </div>
  );
}

Controls.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Controls;