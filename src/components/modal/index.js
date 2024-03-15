import './Modal.css';

const Modal = (props) => {
    const { close } = props;
    return (
        <>
            <div className="modal-container">
                <div className="modal-card">
                    <button onClick={() => close()}>Fechar</button>
                </div>
            </div>
        </>
    );
}

export default Modal;