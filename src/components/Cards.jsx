// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';
// import image1 from '../images/image1.jpg'
// import image2 from '../images/image2.webp'
// import image3 from '../images/image3.webp'; // Remove trailing space
// function Card() {
//   return (
//     <Container>
//       <Row>
//         <Col xs={6} md={4}>
//           <Image src={image1} rounded />
//         </Col>
//         <Col xs={6} md={4}>
//           <Image src={image2} roundedCircle />
//         </Col>
//         <Col xs={6} md={4}>
//           <Image src={image3} thumbnail />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Card;


import React from 'react';
import { Col, Container, Image, Row, Card } from 'react-bootstrap';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.webp';
import image3 from '../images/image3.webp';

function ImageCard() {
  return (
    <Container fluid className="py-5">
      <Row className="g-4">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="shadow-lg border-0 rounded">
            <Image src={image1} alt="Image 1" fluid rounded className="card-img-top"/>
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Image 1</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="shadow-lg border-0 rounded">
            <Image src={image2} alt="Image 2" fluid roundedCircle className="card-img-top"/>
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Image 2</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="shadow-lg border-0 rounded">
            <Image src={image3} alt="Image 3" fluid thumbnail className="card-img-top"/>
            <Card.Body className="text-center">
              <Card.Title className="fw-bold">Image 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageCard;
