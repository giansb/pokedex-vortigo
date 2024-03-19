import { Link } from 'react-router-dom';
import './login.css';
import { useState } from 'react';

export default function PageLogin(props) {

    const[name, setName] = useState();

    const toDigit = (event) => {
        setName(event.target.value)
    }

    const click = () => {
        props.getName(name)
    }
    return (
        <div className='center'>
            <div className='container-login'>
                <div className='container-icon'>
                    <img className='image-icon' src='./assets/pokebola.png' alt='imagem de uma pokebola, vermelha e branca' />
                    <h3>Pokedex</h3>
                </div>
                <img className='container-login-image' src="./assets/pikachu3.gif" alt="" />
                <form className='container-login-submit'>
                    <input className='input-name' type='text' placeholder='Digite o seu nome' onChange={toDigit}/>
                    <Link to="/home"><button className='container-login-button' onClick={click}>ENTRAR</button></Link>
                </form>
            </div>
        </div>
    );
}