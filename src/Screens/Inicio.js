import React from 'react';
import '../index.css'
import images from '../mascotas-perro-gato-vitrina-tienda-falabella-dk-090522-NM-AC.png'
import comidaPerro from '../alimento-para-perro-adulto-pedigree-saco-carne-21-kg-removebg-preview.png'
import juguetePerro from '../downlakjsdjsdoad-removebg-preview.png'
import comidaGato from '../download-removebg-preview.png'
import jugueteGato from '../61R6XXycJqL._AC_SX466_-removebg-preview.png'
export const Inicio = () => {
    const mapMascotas = [comidaPerro, juguetePerro, comidaGato, jugueteGato]
    return (
    <div className="inicio">
        <img src={images} alt=""/>
      <p className="Letras">
        Encuentra los productos ideales para tus mascotas aquí en mascotás uwu.
        </p>

        <p>
            {mapMascotas.map((mascota, index) => {
                return <img src={mascota} alt="" key={index}/>
                })}
            }
        </p>
        }
    </div>
    );
}
