import React from 'react';
import PropTypes from 'prop-types';

function Modal(props) {
  const { visible } = props;

  return visible ? (
    <div className='modal' tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <h1>Something is happening...</h1>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Modal;
