
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageHome from './components/pages/home';
import PageLogin from './components/pages/login';

function App() {
  return (
    <div className='App'>
      <HashRouter>
      <Routes>
        <Route exact path='/' element={<PageHome/>}/>
        <Route path="/login" element={<PageLogin/>} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
