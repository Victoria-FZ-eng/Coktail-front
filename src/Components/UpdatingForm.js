import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdatingForm extends React.Component{
  render(){
    return(
        <Modal
        show={this.props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            Updating Drink
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.props.up}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name :</Form.Label>
    <Form.Control type="text" name="name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Image URL :</Form.Label>
    <Form.Control type="text" name="url" />
  </Form.Group>
 
  <Button variant="primary" type="submit">
    Save Changes
  </Button>
</Form>
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdatingForm;