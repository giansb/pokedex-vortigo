import Card from '../../card';
import Header from '../../header';
import './home.css';
import datas from '../../data/pokedex.json';


export default function PageHome() {
    let arrayData = JSON.parse(JSON.stringify(datas));
    return (
        <>
            <Header />
            <input className='search-input' type='text' placeholder='Digite um nome ou tipo de Pokemon' />
            <div className='container-cards max-width'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}