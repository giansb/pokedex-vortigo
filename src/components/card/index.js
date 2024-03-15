import './card.css';

export default function Card(props) {

    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif`

    return(
        <div className='card-container'>
            <button className='fav-button'>Adicionar aos favoritos</button>
            <img className='card-container-image' src={image} />
            <p className='card-container-title'>{props.name}</p>
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