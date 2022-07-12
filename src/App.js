import './App.css';
import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/navBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Carrito} from './Screens/Carrito';
import {Inicio} from './Screens/Inicio';
import {Productos} from './Screens/Productos';
function App() {

  const productos = ["caca", "caca1", "caca2","caca3","producto","rosario","te","simpeo"]
  const [productoCarrito, setProductosCarrito] = useState([])
  return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio productos={productos}/>}/>
          <Route path="/Inicio" element={<Inicio productos={productos}/>}/>
          <Route path="/Compras" element={<Carrito productoCarrito={productoCarrito}/>}/>
          <Route path="/Productos" element={<Productos productoCarrito={productoCarrito} productos={productos}/>}/>
        </Routes>
      </>

  );
}

export default App;
