import Card from '../../card';
import Header from '../../header';
import './home.css';


export default function PageHome() {
    return(
        <>
        <Header/>
        <input className='search-input' type='text' placeholder='Digite um nome ou tipo de Pokemon'/>
        <div className='container-cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </>
    );
}