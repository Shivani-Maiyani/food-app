import React, { Fragment } from 'react';
import { ReactDOM } from 'react';
import classes from "./Modal.module.scss";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlays = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

// const portalElement = document.getElementById('overlays');
const Modal = (props) =>{
    return(
        <Fragment>
        {/* {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElement)} */}
        <Backdrop onClose={props.onClose}/>
        <ModalOverlays>{props.children}</ModalOverlays>
        </Fragment>
    );

}
export default Modal;