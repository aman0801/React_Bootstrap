import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
const Footer = () => {
    return (
        <section className="section">
        <div className="container">
            <div className="row">
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.6VVSRjWebW7mqX3an1-MJAHaGN?w=207&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>

            
        </section>
    )
}

export default Footer