import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  console.log('props TODO', props);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };

  const onBackdropHandler = () => {
    console.log("You clicked on backdrop");
    setModalIsOpen(false);
  };

  const onConfirmHandler = () => {
    console.log("You clicked on confirm button");
    setModalIsOpen(false);
  };

  const onCancelHandler = () => {
    console.log("You clicked on cancel button");
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          onCancelHandler={onCancelHandler}
          onConfirmHandler={onConfirmHandler}
        />
      )}
      {modalIsOpen && <Backdrop onClick={onBackdropHandler} />}
    </div>
  );
}

export default Todo;
