import React from "react";

function Modal(props) {
  console.log('propsModal', props);
  const onCancelHandler = () => {
    props.onCancelHandler();
  };

  const onConfirmHandler = () => {
    props.onConfirmHandler();
  };

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onCancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
