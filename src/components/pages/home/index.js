import Card from '../../card';
import Header from '../../header';
import './home.css';
import datas from '../../data/pokedex.json';


export default function PageHome() {
    let arrayData = JSON.parse(JSON.stringify(datas));
    return (
        <>
        <Header/>
        <input className='search-input' type='text' placeholder='Digite um nome ou tipo de Pokemon'/>
        <div className='container-cards max-width'>
            {
                arrayData.map((item, id) => {
                    return <Card
                        key={id+1}
                        name={item.name['english']}
                        id={id+1}
                        hp={item.base['HP']}
                        attack={item.base['Attack']}
                        defense={item.base['Defense']}
                        spattack={item.base['Sp. Attack']}
                        spdefense={item.base['Sp. Defense']}
                        speed={item.base['Speed']}/>
                })
            }
        </div>
        </>
    );
}