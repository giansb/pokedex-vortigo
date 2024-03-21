
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageHome from './components/pages/home';
import PageLogin from './components/pages/login';
import PageProfile from './components/pages/profile';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [favLength, setFavLength] = useState(0);
  const [userIcon, setUserIcon] = useState('./assets/treinador-de-pokemon.png');
  const [appState, setAppState] = useState();
  const [background, setBackground] = useState('#fff');

  const addToArray = (id) => {
    let array = favorites;
    if (favorites.indexOf(id) < 0) {
      array.push(id)

    } else {
      array.splice(favorites.indexOf(id), 1);
    }

    setFavorites(array)
    console.log(favorites)
    setFavLength(favorites.length)

  }

  

  const changeBackgroundColor = (e) => {
    setBackground(e)
  }

  const changeNickname = (e) => {
    setName(e)
  }

  const changeUserIcon = (e) => {
    setUserIcon(e);
  }

  const logOutAppp = (e) => {
    setAppState(e);
    setUserIcon('./assets/treinador-de-pokemon.png');
    setName(appState);
    setFavorites([]);
    setFavLength(0);
    setBackground('#fff');
  }

  return (
    <div className='App' style={{ background: background }}>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<PageLogin getName={(e) => setName(e)} />} />
          <Route exact path='/home' element={<PageHome favArray={favorites} logOutApp={(e) => logOutAppp(e)} userIcon={userIcon} username={name} pokemonCount={favLength} getIdPage={(e) => addToArray(e)} />} />
          <Route path="/profile" element={<PageProfile favArray={favorites} logOutApp={(e) => logOutAppp(e)} userIcon={userIcon} getNewUserIconApp={(e) => changeUserIcon(e)} pokemonCount={favLength} username={name} getNewNickApp={(e) => changeNickname(e)} getBackgroundColorApp={(e) => changeBackgroundColor(e)} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
