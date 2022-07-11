import React, { useState} from 'react'

import Producto from '../components/Producto'
import { Container, Row } from 'react-bootstrap'
import Display from '../components/Display'
import "../App.css"
export const Productos = ({productos, productoCarrito, setProductosCarrito}) => {


  return (
    <>
        <Container className="mt-5">
            <Display data={productos}productoCarrito={productoCarrito} setProductosCarrito={setProductosCarrito} />
        </Container>

    </>
  )
}
