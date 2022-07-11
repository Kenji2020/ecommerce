import React from 'react';
import '../../index.css'
import jugueteGato from "./assets/61R6XXycJqL._AC_SX466_-removebg-preview.png"
import images from "./assets/mascotas-perro-gato-vitrina-tienda-falabella-dk-090522-NM-AC.png"
import comidaPerro from "./assets/alimento-para-perro-adulto-pedigree-saco-carne-21-kg-removebg-preview.png"
import juguetePerro from "./assets/downlakjsdjsdoad-removebg-preview.png"
import comidaGato  from "./assets/download-removebg-preview.png"
export const Inicio = () => {
    const mapMascotas = [comidaPerro, juguetePerro, comidaGato, jugueteGato]
    return (
    <div className="inicio">
        <img src={images} className='w-100' alt=""/>
      <p className="Letras">
        Encuentra los productos iadeales para tus mascotas aquí en mascotás uwu.
        </p>

        <div className="d-flex justify-content-around">
{/*             {mapMascotas.map((mascota, index) => {
                return <img src={mascota} alt="" key={index}/>
                })}
            } */}
            {
                mapMascotas.map((mascota, index) => (
                    <img className="    " style={{ width: '18rem', margin: "0" }} src={mascota} key={index}/>
                ))
            }
        </div>
        
    </div>
    );
}