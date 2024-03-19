import Card from '../../card';
import Header from '../../header';
import './home.css';
import datas from '../../data/pokedex.json';
import { useState } from 'react';


export default function PageHome(props) {
    let arrayData = JSON.parse(JSON.stringify(datas));
    const [pokeSearch, setPokeSearch] = useState('');

    const handleInputChange = (e) => {
        setPokeSearch(e.target.value);
    };

    const filterByNameAndType = (item) => {
        if (item.name['english'].toLowerCase().includes(pokeSearch.toLowerCase())
         || item.type.map(type => type.toLowerCase()).includes(pokeSearch.toLowerCase())) {
            return item;
        }
        return null;
    }

    const searchResult = arrayData.filter(filterByNameAndType);

    return (
        <>
            <Header username={props.username}/>
            <input className='search-input' type='text' placeholder='Digite um nome ou tipo de Pokemon' value={pokeSearch} onChange={handleInputChange} />
            {pokeSearch === '' ? <div className='container-cards max-width'>
                {
                    arrayData.map((item, id) => {
                        return <Card
                            key={id + 1}
                            name={item.name['english']}
                            id={id + 1}
                            hp={item.base['HP']}
                            attack={item.base['Attack']}
                            defense={item.base['Defense']}
                            spattack={item.base['Sp. Attack']}
                            spdefense={item.base['Sp. Defense']}
                            speed={item.base['Speed']} 
                            getIdCard={(e) => props.getIdPage(e)}/>
                    })
                }
            </div>
            : <div className='container-cards max-width'>
                {searchResult.map((item, index) => {
                    return <Card
                        key={index + 1}
                        name={item.name['english']}
                        id={item.id}
                        hp={item.base['HP']}
                        attack={item.base['Attack']}
                        defense={item.base['Defense']}
                        spattack={item.base['Sp. Attack']}
                        spdefense={item.base['Sp. Defense']}
                        speed={item.base['Speed']}
                    />
                })}
            </div>}
        </>
    );
}