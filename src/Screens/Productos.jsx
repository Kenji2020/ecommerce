import React, { useState} from 'react'

import Producto from '../components/Producto'
import { Container, Row } from 'react-bootstrap'
import Display from '../components/Display'
import "../App.css"
export const Productos = () => {

    const productos = ["caca", "caca1", "caca2","caca3","producto","rosario","te","amo"]

  return (
    <>
        <Container className="mt-5">
            <Display data={productos}/>
        </Container>
    
    </>
  )
}
