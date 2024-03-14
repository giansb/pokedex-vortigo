import './card.css';

export default function Card() {
    return(
        <div className='card-container'>
            <button className='fav-button'>Adicionar aos favoritos</button>
            <img className='card-container-image' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif' />
            <p className='card-container-title'>Nome do personagem</p>
            <div className='card-attributes'>
                <p>teste</p>
                <p>teste</p>
                <p>teste</p>
                <p>teste</p>
                <p>teste</p>
                <p>teste</p>
            </div>
        </div>
    );
}