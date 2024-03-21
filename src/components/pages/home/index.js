
import Header from '../../header';
import RenderCards from '../../renderCards';
import './home.css';


export default function PageHome(props) {

    return (
        <>
            <Header logOutHome={(e) => props.logOutApp(e)} userIcon={props.userIcon} pokemonCount={props.pokemonCount} username={props.username}/>
            <RenderCards getIdCard={(e) => props.getIdPage(e)}/>
        </>
    );
}