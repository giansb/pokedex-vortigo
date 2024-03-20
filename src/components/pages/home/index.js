
import Header from '../../header';
import RenderCards from '../../renderCards';
import './home.css';


export default function PageHome(props) {
    

    return (
        <>
            <Header pokemonCount={props.pokemonCount} username={props.username}/>
            <RenderCards getIdPage={(e) => props.getIdPage(e)}/>
        </>
    );
}