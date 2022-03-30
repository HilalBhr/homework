import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default class Foruma extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: 'firebrick' }}>Join Our Team</h1>
        <Form>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Name-Surname</Form.Label>
              <Form.Control type='email' placeholder='Please enter name' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='password'
                placeholder='Please enter your number'
              />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Mail</Form.Label>
            <Form.Control placeholder='Please enter your mail' />
          </Form.Group>

          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Career</Form.Label>
              <Form.Select defaultValue='Choose...'>
                <option>Textile</option>
                <option>Foot</option>
                <option>Education</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Note</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' id='formGridCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
