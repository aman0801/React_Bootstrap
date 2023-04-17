import React from 'react'
import Card from 'react-bootstrap/Card';
import './All.css'
const Footer = () => {
    return (
        <section className="section bg-dark text-dark">
            <h4>ok</h4>
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Title>Card Title</Card.Title>
                            <Card.Body>This is some text within a card body.
                                This is some text within a card body.
                                This is some text within a card body.
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
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
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer