import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/navBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Carrito} from './Screens/Carrito';
import {Inicio} from './Screens/Inicio';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="/Carrito" element={<Carrito/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
