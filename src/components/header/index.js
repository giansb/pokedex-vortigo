import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return(
        <header className='max-width'>
            <div className='container-icon'>
                <img className='image-icon' src='./assets/pokebola.png' alt='imagem de uma pokebola, vermelha e branca'/>
                <h3>Pokedex</h3>
            </div>
            <nav className='navgation'>
                <Link to="/login">Home</Link>
                <a href=''>profile</a>
                <a href=''>Sair</a>
            </nav>
        </header>
    );
}

