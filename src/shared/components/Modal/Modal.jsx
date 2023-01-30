import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={style.overlay}>
        <div className={style.modal}>
          {/* <img src="" alt="" /> */}
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
