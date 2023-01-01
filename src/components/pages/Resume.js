import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Kresume from '../image/KatieKim_Resume.pdf'

export default function Resume() {
  return (
    <><ListGroup as="ul">
      <ListGroup.Item as="li" active>
        My Skills
      </ListGroup.Item>
      <ListGroup.Item as="li">JavaScript</ListGroup.Item>
      <ListGroup.Item as="li">SQL(MySQL, NoSQL)</ListGroup.Item>
      <ListGroup.Item as="li">Database</ListGroup.Item>
      <ListGroup.Item as="li">REST APIs</ListGroup.Item>
      <ListGroup.Item as="li">Node.js</ListGroup.Item>
      <ListGroup.Item as="li">Git</ListGroup.Item>
      <ListGroup.Item as="li">React.js</ListGroup.Item>
      <ListGroup.Item as="li">HTML5/CSS</ListGroup.Item>
      <ListGroup.Item as="li">Testing</ListGroup.Item>
      <ListGroup.Item as="li">DataMigration</ListGroup.Item>
      <ListGroup.Item as="li">SAP</ListGroup.Item>
      <ListGroup.Item as="li">CCH Axcess</ListGroup.Item>
      <ListGroup.Item as="li">Quicksbooks</ListGroup.Item>
      <ListGroup.Item as="li">Sureprep</ListGroup.Item>
      <ListGroup.Item as="li">BNA</ListGroup.Item>
      <ListGroup.Item as="li">Lacert</ListGroup.Item>
      <ListGroup.Item as="li">MS Office</ListGroup.Item>
    </ListGroup>

      <br />
      <a href={Kresume} download='Resume_KatieKim'>
        <Button variant="primary" size="lg">
          Click here to download my complete resume!
        </Button>
      </a>

    </>



  )
}
