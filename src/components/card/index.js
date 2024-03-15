import './card.css';

export default function Card(props) {

    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif`

    return(
        <div className='card-container'>
            <button className='fav-button'>Adicionar aos favoritos</button>
            <img className='card-container-image' src={image} />
            <p className='card-container-title'>{props.name}</p>
            <div className='card-attributes'>
                <div className='card-attributes-column'>
                    <p>HP: {props.hp}</p>
                    <p>Attack {props.attack}</p>
                    <p>Defense: {props.defense}</p>
                </div>

                <div className='card-attributes-column'>
                    <p>SP. Attack: {props.spattack}</p>
                    <p>SP. Defense: {props.spdefense}</p>
                    <p>Speed: {props.speed}</p>
                </div>
            </div>
        </div>
    );
}