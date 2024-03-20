import { useState } from 'react';
import Card from '../../card';
import Header from '../../header';
import './profile.css'
import Modal from '../../modal';


export default function PageProfile(props) {
    const [isModalVisible, setModalVisibility] = useState(false); 

    function modalClickHandler() {
        setModalVisibility(true);
    }

    return(
       <>
            <Header username={props.username}/>
            <input className='search-input' type='text' placeholder='Digite um nome ou tipo de Pokemon' />
            <button onClick={modalClickHandler}  className='perfil-edit'>Editar perfil</button>
            <div className='container-cards max-width'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                {isModalVisible ? (<Modal close={() => setModalVisibility(false)} getBackgroundColor={(e) => props.getBackgroundColorApp(e)}/>) : null} 
            </div>
       </> 
    );
}