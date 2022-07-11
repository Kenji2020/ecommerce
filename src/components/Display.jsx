import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Producto from './Producto'

const Display = ({data}) => {
  return (
    <>
    <div className="row ">
        {data.map((element, index) => (
                <Producto name={element} key={index}/>
        ))}

    </div>
    </> 
  )
}

export default Display