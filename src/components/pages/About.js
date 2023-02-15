import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mypic from '../image/temp_1624553840068.1945164888.jpeg'

export default function About() {

    return (
        <>
            <Container className='background'>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6} className="intro">
                        Full-stack web developer leveraging background in Accounting to provide unique
                        perspectives on how end-users interact with websites and software platforms.<br/>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}><img src={mypic} style={{ width: '100%' }} /></Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </>
    )
}
