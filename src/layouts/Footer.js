import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    
        <Container className='mt-5'>
          <Row xs={1} md={3} lg={3} style={{textAlign:"center"}}>
            <Col>Contact Us</Col>
            <Col>Logo</Col>
            <Col>Social Media</Col>
          </Row>
        </Container>
  );
};

export default Footer;