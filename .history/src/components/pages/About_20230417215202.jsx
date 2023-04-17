import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-5">About Us</h2>
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
        <Card>
          <Card.Body>
            <Card.Title>Our Mission</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
              egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus
              vel. Phasellus fermentum consequat eros at condimentum.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6 col-md-12">
        <Card>
          <Card.Body>
            <Card.Title>Our Vision</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
              egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus
              vel. Phasellus fermentum consequat eros at condimentum.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
        <Card>
          <Card.Body>
            <Card.Title>Our Story</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
              egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus
              vel. Phasellus fermentum consequat eros at condimentum.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-6 col-md-12">
        <Card>
          <Card.Body>
            <Card.Title>Our Team</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
              egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus
              vel. Phasellus fermentum consequat eros at condimentum.
            </Card.Text>
            <Button variant="primary" className="mt-3">
              Meet Our Team
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
  )
}

export default About