import { useState } from 'react';
import './Modal.css';

const Modal = (props) => {
    const { close } = props;

    const backgroundColorHandler = (e) => {
        console.log('e.target.value');
        props.getBackgroundColor(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            <div className="modal-container">
                <div className='modal-container-left'>
                    <button>Mudar Icone</button>
                    <div className='modal-container-background-edit'>
                        <label>Personalizar plano de fundo</label>
                        <select onChange={backgroundColorHandler}>
                            <option
                                style={{background: '#FF7F00'}}
                                value={'linear-gradient(to right, #FF7F00, #8C1717)'}
                            ></option>
                            <option
                                style={{backgroundColor: '#ff0000'}}
                                value={'linear-gradient(to right, #ff0000, #FF6EC7)'}
                            ></option>
                            <option
                                style={{ backgroundColor: '#4D4DFF' }}
                                value={'linear-gradient(to right, #4D4DFF, #9F5F9F)'}
                            ></option>
                            <option
                                style={{ backgroundColor: '#32CD99' }}
                                value={'linear-gradient(to right, #32CD99, #99CC32)'}
                            ></option>
                        </select>
                    </div>
                    <button onClick={() => close()}>Fechar</button>
                </div>
                <div className='modal-container-right'>
                    <img className='user-icon' src='./assets/jigglypuff.png' alt='icone do usuario' />
                    <h2 className='user-nickname'>{props.username}</h2>
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