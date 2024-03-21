import { useState } from 'react';
import './Modal.css';
import IconModal from '../iconModal';

const Modal = (props) => {
    const { close } = props;
    const [nickClass, setNickClass] = useState('hide');
    const [nickEdit, setNickEdit] = useState('Editar Nickname');
    const [isModalVisible, setModalVisibility] = useState(false); 

    function modalClickHandler() {
        setModalVisibility(true);
    }

    const backgroundColorHandler = (e) => {
        props.getBackgroundColor(e.target.value);
    }

    const nicknameHandler = () => {
        if(nickClass === 'hide') {
            setNickClass('');
            setNickEdit('Cancelar')
        } else {
            setNickClass('hide');
            setNickEdit('Editar Nickname')
        }
    }

    const nicknameChangeHandler = (e) => {
        e.preventDefault();
        props.getNewNickProfile(document.getElementById('inputNickEdit').value);
        nicknameHandler();
    }

    const getNewUserIconModal = (e) => {
        props.getNewUserIconProfile(e);
    }

    return (
        <>
            <div className="modal-container">
                <div className='modal-container-left'>
                    <button onClick={modalClickHandler}>Mudar Icone</button>
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
                    <img className='user-icon' src={props.userIcon} alt='icone do usuario' />
                    <h2 className='user-nickname'>{props.username}</h2>
                    <form className={nickClass} onSubmit={nicknameChangeHandler}>
                        <input id='inputNickEdit' type='text' placeholder='Digite seu novo nick'></input>
                        <button type='submit'>Salvar</button>
                    </form>
                    <button onClick={nicknameHandler}>{nickEdit}</button>
                </div>
                {isModalVisible ? (<IconModal getNewUserIconModal={(e) => getNewUserIconModal(e)} close={() => setModalVisibility(false)} />) : null} 
            </div>
        </>
    );
}

export default Modal; 