import datas from '../data/pokedex.json';
import { useState } from 'react';
import Card from '../card';


const RenderCards = (props) => {
    let arrayData = JSON.parse(JSON.stringify(datas));
    const [pokeSearch, setPokeSearch] = useState('');

    const handleInputChange = (e) => {
        setPokeSearch(e.target.value);
    };

    const filterByNameAndType = (item) => {
        if(pokeSearch.length>=1) {
            if (item.name['english'].toLowerCase().includes(pokeSearch.toLowerCase())
            || item.type.map(type => type.toLowerCase()).includes(pokeSearch.toLowerCase())) {
                return item;
            }

        } else {
            return item;
                }
    }

    const searchResult = arrayData.filter(filterByNameAndType);

    return(
        <>
        <input className='search-input' type='text' placeholder='Digite um nome ou tipo de Pokemon' value={pokeSearch} onChange={handleInputChange} />
            
            <div className='container-cards max-width'>
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
            </div>
        </>
    );
}

export default RenderCards;