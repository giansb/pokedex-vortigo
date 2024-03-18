import { Link } from 'react-router-dom';
import './login.css';

export default function PageLogin() {
    return (
        <div className='center'>
            <div className='container-login'>
                <div className='container-icon'>
                    <img className='image-icon' src='./assets/pokebola.png' alt='imagem de uma pokebola, vermelha e branca' />
                    <h3>Pokedex</h3>
                </div>
                <img className='container-login-image' src="./assets/pikachu3.gif" alt="" />
                <div className='container-login-submit'>
                    <input className='input-name' type='text' placeholder='Digite o seu nome' />
                    <Link to="/home"><button className='container-login-button'>ENTRAR</button></Link>
                </div>
            </div>
        </div>
    );
}