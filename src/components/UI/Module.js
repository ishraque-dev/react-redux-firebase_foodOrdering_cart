import React from 'react';
import style from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
  return <div className={style.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');
const Module = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Module;
