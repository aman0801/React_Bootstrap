import React from 'react'
import Card from 'react-bootstrap/Card';
// import './All.css'
import ListGroup from 'react-bootstrap/ListGroup';
const Footer = () => {
    return (
        <section className="section bg-dark text-dark">
            <h4>ok</h4>
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <Card border="primary" style={{ width: '18rem' }} bg='dark' text="white">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Body>This is some text within a card body.
                                This is some text within a card body.
                                This is some text within a card body.
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card border="primary" style={{ width: '18rem' }} bg='dark'>
                            <Card.Body>
                                <Card.Title>Quick Links</Card.Title>

                                <Card.Link href="#">Card Link</Card.Link>
                                <br />
                                <Card.Link href="#">Another Link</Card.Link>
                                <br />
                                <Card.Link href="#">Card Link</Card.Link>
                                <br />
                                <Card.Link href="#">Another Link</Card.Link>
                                <br />
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card border="primary" style={{ width: '18rem' }} bg='dark' text="white">
                            <Card.Header>Contact Info</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Phone Number </ListGroup.Item>
                                <ListGroup.Item>Email</ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer