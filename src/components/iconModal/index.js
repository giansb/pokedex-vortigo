import './iconmodal.css';

const IconModal = (props) => {
    const { close } = props;

    const iconChangeHandler = (e) => {
        props.getNewUserIconModal(e.target.getAttribute('src'));
        console.log(e.target.getAttribute('src'));
    }

    return (
        <>
            <div className='container-icons-modal'>
                <img
                    className='jigglypuff'
                    onClick={iconChangeHandler}
                    src='./assets/jigglypuff.png'
                    alt='icone do jigglypuff'
                />
                <img
                    className='meowth'
                    onClick={iconChangeHandler}
                    src='./assets/meowth.png'
                    alt='icone do meowth'
                />
                <img
                    className='pikachu'
                    onClick={iconChangeHandler}
                    src='./assets/pikachu.png'
                    alt='icone do pikachu'
                />
                <img
                    className='psyduck'
                    onClick={iconChangeHandler}
                    src='./assets/psyduck.png'
                    alt='icone do psyduck'
                />
                <img
                    className='treinador-de-pokemon'
                    onClick={iconChangeHandler}
                    src='./assets/treinador-de-pokemon.png'
                    alt='icone do treinador-de-pokemon'
                />
                <img
                    className='venonat'
                    onClick={iconChangeHandler}
                    src='./assets/venonat.png'
                    alt='icone do venonat'
                />
            </div>
            <button className='closeBtn' onClick={() => close()}><i class="fa-solid fa-x"></i></button>
        </>
    )
}

export default IconModal;