import React from 'react';
import '../index.css'
import images from '../img/mascotas-perro-gato-vitrina-tienda-falabella-dk-090522-NM-AC.png'
import comidaPerro from '../img/alimento-para-perro-adulto-pedigree-saco-carne-21-kg-removebg-preview.png'
import juguetePerro from '../img/downlakjsdjsdoad-removebg-preview.png'
import comidaGato from '../img/download-removebg-preview.png'
import jugueteGato from '../img/61R6XXycJqL._AC_SX466_-removebg-preview.png'
import {BrowserView, MobileView, isMobile} from 'react-device-detect';
export const Inicio = () => {
    const mapMascotas = [comidaPerro, juguetePerro, comidaGato, jugueteGato]
    if(isMobile) {
        return (
            <div> This content is available only on mobile</div>
        )
    }
    return (
    <div className="inicio">
        <img src={images} className="w-100" alt=""/>
      <p className="Letras">
        Encuentra los productos ideales para tus mascotas aquí en mascotás uwu.
        </p>

        <p>
            {mapMascotas.map((mascota, index) => {
                return <img src={mascota} alt="" key={index}/>
                })}

        </p>
        <>
            <BrowserView>
                <h1>This is rendered only in browser</h1>
            </BrowserView>
            <MobileView>
                <h1>This is rendered only on mobile</h1>
            </MobileView>
        </>

    </div>
    );
}
