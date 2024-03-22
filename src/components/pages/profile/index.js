import { useState } from 'react';
import Header from '../../header';
import './profile.css'
import Modal from '../../modal';
import RenderCards from '../../renderCards';

export default function PageProfile(props) {
    const [isModalVisible, setModalVisibility] = useState(false); 

    function modalClickHandler() {
        setModalVisibility(true);
    }

    const getNewUserIconProfile = (e) => {
        props.getNewUserIconApp(e);
    }

    return(
       <>
            <Header 
                logOutHome={(e) => props.logOutApp(e)} 
                userIcon={props.userIcon} 
                pokemonCount={props.pokemonCount} 
                username={props.username}
            />
            <div className='direction'>
            <button onClick={modalClickHandler}  className='perfil-edit'>Editar perfil</button>
            <h1>Seus pokemons favoritos:</h1>
                <RenderCards 
                    favArray={props.favArray}
                    getIdCard={(e) => props.getIdPage(e)} 
                    justFavCards={true}
                />
                {isModalVisible ? (<Modal 
                                        userIcon={props.userIcon} 
                                        getNewUserIconProfile={(e) => getNewUserIconProfile(e)} 
                                        getNewNickProfile={(e) => props.getNewNickApp(e)} 
                                        username={props.username} 
                                        close={() => setModalVisibility(false)} 
                                        getBackgroundColor={(e) => props.getBackgroundColorApp(e)}
                                    />) : null} 
            </div>
       </> 
    );
}