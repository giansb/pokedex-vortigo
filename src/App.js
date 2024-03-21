
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageHome from './components/pages/home';
import PageLogin from './components/pages/login';
import PageProfile from './components/pages/profile';
import { useState } from 'react';

function App() {

  const[name, setName] = useState('');
  const[favorites, setFavorites] = useState([]);
  const[favLength, setFavLength] = useState(0);
  const [background, setBackground] = useState('');

  const addToArray = (id) => {
    let array = favorites;
    if(favorites.indexOf(id) < 0) {
      array.push(id)
      
    } else {
      array.splice(favorites.indexOf(id), 1);
    }

      setFavorites(array)
      console.log(favorites)
      setFavLength(favorites.length)
    
  }
  
  

  const changeBackgroundColor = (e) => {
    if(e !== ''){
      setBackground(e)
    }
    console.log(e);
  }

  return (
    <div className='App' style={{background: background}}>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<PageLogin getName={(e) => setName(e)}/>} />
          <Route exact path='/home' element={<PageHome favArray={favorites} username={name} pokemonCount={favLength} getIdPage={(e) => addToArray(e)}/>} />
          <Route path="/profile" element={<PageProfile favArray={favorites} username={name} pokemonCount={favLength} getBackgroundColorApp={(e) => changeBackgroundColor(e)}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
