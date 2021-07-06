import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cardsfav extends React.Component{
  render(){
    return(
        <>
         <Row xs={2} md={3} lg={4}>
        {this.props.arr.map((drink,idx)=>{
            return(
        <Col>
              <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={drink.url} />
        <Card.Body>
          <Card.Title>{drink.name}</Card.Title>
          
          <Button value={idx} onClick={this.props.del} variant="primary">Delete</Button>
          <Button value={idx} onClick={this.props.up} variant="primary">Update</Button>
        </Card.Body>
      </Card>
      </Col>)
        })}
        </Row>
        </>

        
    

    
      
    )
  }
}

export default Cardsfav;