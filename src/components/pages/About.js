import React from 'react';
import Card from 'react-bootstrap/Card';

import mypic from '../image/temp_1624553840068.1945164888.jpeg'

export default function About() {

    return (
        <>
            <Card>
                <Card.Img variant="top" src={mypic} />
                <Card.Body>
                    <Card.Text>
                        Hi my name is Katie Kim. Welcome to my React portfolio. <br /><br />
                        Logical and results-driven CPA ready to learn and grow as a developer.<br />
                        Works at fast pace to meet tight deadlines. <br />Enthusiastic team player
                        ready to contribute to company success.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
