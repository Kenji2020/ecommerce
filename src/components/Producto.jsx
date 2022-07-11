import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {db} from '../firebase'
const Producto = ({name}) => {
const addCarrito = ()   =>{
    db.collection('Carrito').add({
        name: name,
        cantidad: 1,
        precio: 1
    }).then(r => {
        console.log(r)
    })
    }
    return (
    <Card style={{ width: '18rem', margin: "1rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maxime animi harum doloremque voluptatibus numquam incidunt soluta, dolores atque ex?
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Another Link</Card.Link>
          <button className="btn btn-primary" onClick={()=>{addCarrito()}}>Agregar al carrito</button>
      </Card.Body>
    </Card>
  );
}

export default Producto
