import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import sfpic from '../image/sf_bdgs.jpg'

export default function Contact() {


  return (
    <>
      <Row>
        <Col>
          <img src={sfpic} style={{ width: '95%' }} />
        </Col>
        <Col>
          <div className='contact'>
            Let's work together. Get in touch using the form below.
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Name</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
