import React from "react";
import img1 from "../../Images/Gif/1.gif";
import img2 from "../../Images/Gif/2.gif";
import img3 from "../../Images/Gif/3.gif";
import img4 from "../../Images/Gif/4.gif";
import img5 from "../../Images/Gif/5.gif";
import img6 from "../../Images/Gif/6.gif";
import fac1 from "../../Images/facts/1.png";
import fac2 from "../../Images/facts/2.png";
import fac3 from "../../Images/facts/3.png";
import fac4 from "../../Images/facts/4.png";
import fac5 from "../../Images/facts/5.png";
import fac6 from "../../Images/facts/6.png";
import fac7 from "../../Images/facts/7.png";
import fac8 from "../../Images/facts/8.png";
import fac10 from "../../Images/facts/10.png";

import { CardColumns, Card, Carousel, Image, Row, Col } from "react-bootstrap";

export default function WelcomePage() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Image
              className="d-block w-200 m-3"
              width={455}
              src={img1}
              alt="First slide"
              fluid
            />
            <Image
              className="d-block w-200 m-3"
              width={455}
              src={img2}
              alt="First slide"
              rounded
            />
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Image
              className="d-block w-200 m-3"
              width={455}
              src={img3}
              alt="First slide"
              fluid
            />
            <Image
              className="d-block w-200 m-3"
              width={455}
              src={img4}
              alt="First slide"
              rounded
            />
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="justify-content-md-center">
            <Image
              className="d-block w-200 m-3"
              width={455}
              src={img5}
              alt="First slide"
              fluid
            />
            <Image
              className="d-block w-200 m-3"
              width={455}
              src={img6}
              alt="First slide"
              rounded
            />
          </Row>
        </Carousel.Item>
      </Carousel>
      <p className="lead display-4">Some Facts By WHO</p>
      <div>
        <Row lg={true}>
          <Col sm={8}>
            <Image
              rounded
              className="d-block w-200 m-3"
              width={"100%"}
              height={385}
              src={fac1}
              alt="First slide"
            />
          </Col>
          <Col sm={4}>
            <Image
              rounded
              className="d-block w-200 m-3"
              src={fac2}
              width={"100%"}
              height={385}
              alt="First slide"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Image
              rounded
              className="d-block w-200 m-3"
              width={"100%"}
              height={385}
              src={fac3}
              alt="First slide"
            />
          </Col>
          <Col sm={4}>
            <Image
              rounded
              className="d-block w-200 m-3"
              src={fac4}
              width={"100%"}
              height={385}
              alt="First slide"
            />
          </Col>
          <Col sm={4}>
            <Image
              rounded
              className="d-block w-200 m-3"
              src={fac5}
              width={"100%"}
              height={385}
              alt="First slide"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Image
              rounded
              className="d-block w-200 m-3"
              width={"100%"}
              height={385}
              src={fac6}
              alt="First slide"
            />
          </Col>
          <Col sm={8}>
            <Image
              rounded
              className="d-block w-200 m-3"
              src={fac7}
              width={"100%"}
              height={385}
              alt="First slide"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Image
              rounded
              className="d-block w-200 m-3"
              width={"100%"}
              height={385}
              src={fac8}
              alt="First slide"
            />
          </Col>
          <Col sm={6}>
            <Image
              rounded
              className="d-block w-200 m-3"
              src={fac10}
              width={"100%"}
              height={385}
              alt="First slide"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
