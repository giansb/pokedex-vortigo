import datas from '../data/pokedex.json';
import { useEffect, useState } from 'react';
import Card from '../card';


const RenderCards = (props) => {
    const[arrayData, setArrayData] = useState([]);
    let arrayD = JSON.parse(JSON.stringify(datas));
    const [pokeSearch, setPokeSearch] = useState('');

    const filterByFav = (item) => {
        if(props.favArray.indexOf(item.id) >= 0) {
            return item;
        }
    }

    useEffect(() => {
        if(props.justFavCards) {
            

             arrayD = arrayD.filter(filterByFav);
            setArrayData(arrayD)
        } else {
             arrayD = JSON.parse(JSON.stringify(datas));
            setArrayData(arrayD)
        }

        
    }, [props.justFavCards]);

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
    //favArray
    return(
        <>
        <input className='search-input' type='text' placeholder='Digite um nome ou tipo de Pokemon' value={pokeSearch} onChange={handleInputChange} />
            
            <div className='container-cards max-width'>
                {searchResult.map((item, index) => {
                    let fav = false;
                    if(props.favArray.indexOf(item.id) >= 0) {
                        fav = true;
                    } else {
                        
                        
                    }
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
                        getIdCard={(e) => {
                            props.getIdCard(e)
                            if(props.justFavCards) {
                                arrayD = arrayD.filter(filterByFav);
                                setArrayData(arrayD)
                                
                            }
                        }}
                        isFav ={fav}
                        justFavCards={props.justFavCards}
                        
                    />
                })}
            </div>
        </>
    );
}

export default RenderCards;