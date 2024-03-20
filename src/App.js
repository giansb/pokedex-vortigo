
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
  
  const changeBackgroundColor = (backgroundColor) => {
    console.log(backgroundColor);
  }

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<PageLogin getName={(e) => setName(e)}/>} />
          <Route exact path='/home' element={<PageHome username={name} pokemonCount={favLength} getIdPage={(e) => addToArray(e)}/>} />
          <Route path="/profile" element={<PageProfile pokemonCount={favLength} username={name} getBackgroundColorApp={(e) => changeBackgroundColor(e)}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
