import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import githubLogo from '../image/291716_github_logo_social network_social_icon.png'

export default function Portfolio() {
  return (

    <Container>

      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={githubLogo} />
            <Card.Body>
              <Card.Title>React Portfolio</Card.Title>
              <Card.Text>
                My professional Portfolio using React.
              </Card.Text>
              <a href='https://github.com/KatieKim22/react-portfolio'><Button variant="primary">See Github Repo</Button></a>
            </Card.Body>
          </Card>
        </Col>

        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={githubLogo} />
          <Card.Body>
            <Card.Title>Tech Blog</Card.Title>
            <Card.Text>
              Tech Blog page. Users can sign up, and log-in and out. Users can create blog page and comment each other.
            </Card.Text>
            <a href='https://github.com/KatieKim22/Tech_Blog'><Button variant="primary">See Github Repo</Button></a>
          </Card.Body>
        </Card></Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={githubLogo} />
          <Card.Body>
            <Card.Title>E-commerce - Backend</Card.Title>
            <Card.Text>
              Backend only e-commerce website. MySQL and Sequelize are the main technologies used.
            </Card.Text>
            <a href='https://github.com/KatieKim22/E-commerce_back-end'><Button variant="primary">See Github Repo</Button>
            </a> </Card.Body>
        </Card></Col>

      </Row>

      <Row>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={githubLogo} />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              A web note taker you can record notes and keep track of works.
            </Card.Text>
            <a href='https://github.com/KatieKim22/NoteTaker'><Button variant="primary">See Github Repo</Button></a>
          </Card.Body>
        </Card></Col>

        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={githubLogo} />
          <Card.Body>
            <Card.Title>Raedme Generator</Card.Title>
            <Card.Text>
              Generating Readme file via node.js inquiry package.
            </Card.Text>
            <a href='https://github.com/KatieKim22/Readme_Generator'><Button variant="primary">See Github Repo</Button></a>
          </Card.Body>
        </Card></Col>
        <Col> <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={githubLogo} />
          <Card.Body>
            <Card.Title>Code Quiz</Card.Title>
            <Card.Text>
              Code Quiz app about basic concepts of JavaScript.
            </Card.Text>
            <a href='https://github.com/KatieKim22/Code_Quiz'><Button variant="primary">See Github Repo</Button></a>
          </Card.Body>
        </Card></Col>
      </Row>
    </Container>
  )
}
