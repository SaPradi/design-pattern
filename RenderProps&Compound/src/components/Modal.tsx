import CloseIcon from "../Icons/CloseIcon";
import useModalContext from "../hook/useModalContext";

interface ModalProps {
    renderContent: () => React.ReactNode;
}

import './modal.css';

const Modal: React.FC<ModalProps> = ({ renderContent }) => {
    const { isOpen,closeModal,animationStatus } = useModalContext();
    if(!isOpen) return null

    return (
        <div className={`modal ${animationStatus === 'in' ? 'open' : ''} ${animationStatus === 'out' ? 'close' : ''}`}>

            <div className='modal-container'>

                <button className="modal-container__button" onClick={closeModal}>
                    <CloseIcon/>
                </button>

                <div className="modal-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Modal
