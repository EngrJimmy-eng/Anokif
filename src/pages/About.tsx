// src/pages/About.js
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import warehouseImage from '../assets/warehouse.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col,  } from "react-bootstrap";


function About() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About Anokif Express</h1>
      <p className="lead text-center">
        Anokif Express is a fast, reliable, and customer-focused clearing and forwarding company. We pride ourselves on delivering excellence, ensuring
        your parcels reach their destinations safely and on time.
      </p>
      <p className="text-center">
        Our vision is to revolutionize express delivery across Nigeria and
        beyond, combining speed, technology, and customer satisfaction.
      </p>

      <Carousel className="mt-5">
        <Carousel.Item>
          <img src={warehouseImage} className="d-block w-100 h-100" alt="Cargo Ship" style={{ objectFit: "cover" }} />
          <Carousel.Caption>
            <h5>Fast Delivery</h5>
            <p>Speed and reliability across all regions.</p>
          </Carousel.Caption>
        </Carousel.Item>

        
          
          
      </Carousel>

      {/* Writeups Section Before Footer */}
      <Container className="mb-5">
        <Row>
          <Col>
            <h2 className="text-primary">Why Choose Us?</h2>


            <p>
              At Anokif Express, we combine technology and efficiency to 
              provide top-tier courier services. With our dedicated team 
              and modern logistics solutions, we make sure that every package 
              reaches its destination safely and quickly.
            </p>
            <p>
              We aim to redefine the logistics experience by focusing on 
              customer satisfaction, transparent pricing, and innovative 
              delivery solutions tailored to your needs.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>

    
      
  );
}

//  this is very important!
export default About;


