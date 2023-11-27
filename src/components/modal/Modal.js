import { useEffect, useRef } from "react";
import './Modal.css';

function Modal({ isOpen, onClose, imageSrc, altText }) {
    const ref = useRef();
    useEffect(() => {
        if (isOpen) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [isOpen]);

    return (
        <dialog ref={ref} onCancel={onClose} className="modal-dialog">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                <img src={imageSrc} alt={altText} />
            </div>
        </dialog>
    );
}

export default Modal;