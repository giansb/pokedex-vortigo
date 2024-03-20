import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
    return (
        <header className='max-width'>
            <div className='container-icon'>
                <img className='image-icon' src='./assets/pokebola.png' alt='imagem de uma pokebola, vermelha e branca' />
                <h3>Pokedex</h3>
            </div>
            <div className='container-user-info'>
                <img className='user-icon' src='./assets/jigglypuff.png' alt='icone do usuario' />
                <h2 className='user-nickname'>{props.username}</h2>
                <p>Pokemons favoritos: {props.pokemonCount}</p>
            </div>
            <nav className='navgation'>
                <Link to="/home"><i class="fa-solid fa-house"></i></Link>
                <Link to="/profile"><i class="fa-solid fa-user"></i></Link>
                <Link to="/"><i class="fa-solid fa-right-from-bracket"></i></Link>
            </nav>
        </header>
    );
}

