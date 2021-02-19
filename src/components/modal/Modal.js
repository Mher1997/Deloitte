import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('root');

const Modal = ({children, close}) => {

    return createPortal(
        <div className="modal">
            <div className="modal-content">
                <div className="modal-content-header">
                    <div className="modal-content-header-container">
                        <div className="modal-content-header-container-left">
                            <span>+ -</span>
                        </div>
                        <div className="modal-content-header-container-title">
                            <p>Contact Information</p>
                        </div>
                        <div className="modal-content-header-container-close">
                            <span onClick={close}>x</span>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
        , modalRoot
    );
}

export default Modal;
