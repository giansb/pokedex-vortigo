import { useState } from 'react';
import './card.css';

export default function Card(props) {

    let image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif`

    const[gifVisible, setGifVisible] = useState(false);
    const[style, setStyle] = useState('card-container');
    const[buttonText, setButtonText] = useState('Adicionar aos favoritos')

    const changeStyle = () => {
        if(style == 'card-container') {
            setStyle('card-container-fav');
            setButtonText('Remover dos favoritos')
            setGifVisible(true);
            setTimeout(() => {
            setGifVisible(false);
            }, 2300);
        } else {
            setStyle('card-container');
            setButtonText("Adicionar aos favoritos")
        }
    }

    const click = () => {
        props.getIdCard(props.id);
        changeStyle();
    }

    

    return(
        <div className={style}>
            {gifVisible && <img className='gif-animation' src='./assets/animation.gif' />}
            <button className='fav-button' onClick={click}>{buttonText}</button>
            <div className='card-container-image-space'>
                <img className='card-container-image' src={image} />
            </div>
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