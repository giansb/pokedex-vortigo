
import Header from '../../header';
import RenderCards from '../../renderCards';

export default function PageHome(props) {

    return (
        <>
            <Header 
                logOutHome={(e) => props.logOutApp(e)} 
                userIcon={props.userIcon} 
                pokemonCount={props.pokemonCount} 
                username={props.username}
            />
            <RenderCards favArray={props.favArray} getIdCard={(e) => props.getIdPage(e)}/>  
        </>
    );
}