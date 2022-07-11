import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Producto from './Producto'

const Display = ({data, productoCarrito, setProductosCarrito}) => {
  return (
    <>
    <div className="row ">
        {data.map((element, index) => (
                <Producto name={element} key={index} setProductosCarrito={setProductosCarrito}/>
        ))}

    </div>
    </> 
  )
}

export default Display