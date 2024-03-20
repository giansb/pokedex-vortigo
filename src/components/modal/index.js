import { useState } from 'react';
import './Modal.css';

const Modal = (props) => {
    const { close } = props;

    const [background, setBackground] = useState();

    const backgroundColorHandler = (backgroundColor) => {
        props.getBackgroundColor(backgroundColor)
    }

    return (
        <>
            <div className="modal-container">
                <div className='modal-container-left'>
                    <button>Mudar Icone</button>
                    <div className='modal-container-background-edit'>
                        <label>Personalizar plano de fundo</label>
                        <select>
                            <option style={{ backgroundColor: '#000' }} onClick={backgroundColorHandler('#000')}></option>
                            <option style={{ backgroundColor: '#fff' }} onSelect={backgroundColorHandler('#fff')}></option>
                            <option onSelect={backgroundColorHandler('ola')}></option>
                        </select>
                    </div>
                    <button onClick={() => close()}>Fechar</button>
                </div>
                <div className='modal-container-right'>
                    <img className='user-icon' src='./assets/jigglypuff.png' alt='icone do usuario' />
                    <h2 className='user-nickname'>John Doe Doe</h2>
                    <button>Editar Nickname</button>
                </div>
                {/* <div className="modal-card">
                    <button onClick={() => close()}>Fechar</button>
                </div> */}
            </div>
        </>
    );
}

export default Modal; 