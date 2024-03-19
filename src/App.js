
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageHome from './components/pages/home';
import PageLogin from './components/pages/login';
import PageProfile from './components/pages/profile';
import { useState } from 'react';

function App() {

  const[name, setName] = useState('');
  const[favorites, setFavorites] = useState([]);

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<PageLogin getName={(e) => setName(e)}/>} />
          <Route exact path='/home' element={<PageHome username={name} getIdPage={(e) => console.log(e + " deu certo!")}/>} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/profile" element={<PageProfile username={name}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
