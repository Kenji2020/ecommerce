import React,{useEffect} from "react";
import {NavBar} from "../components/navBar";
import {auth, db} from "../firebase";
export const Carrito = () => {
    const [carrito, setCarrito] = React.useState([]);
    useEffect(  () =>{
        db.collection("Carrito").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                setCarrito((doc.data()));
            });
        });
    },[])
    return (
        <div className="inicio">
            <h1>Carrito</h1>
            <p>
                Aquí podrás ver los productos que has agregado al carrito.
                {console.log(carrito)}
                <p>Carrito: {carrito.producto1}</p>
            </p>
        </div>
    );
}
