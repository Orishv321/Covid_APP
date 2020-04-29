import React, { useEffect, useState } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import * as Data from "../../DataRepo";

let HelpNumbers = () => {
  const [covidInfo, setCovidInfo] = useState([]);
  const [servicesf, setServices] = useState([]);
  const [policeAndAmbulance, setPoliceAndAmbulance] = useState([]);
  const [who_msg, setWho_msg] = useState([]);
  const [hospital, setHospital] = useState([]);
  useEffect(() => {
    setCovidInfo(Data.covid_info);
    setServices(Data.Other_Services);
    setPoliceAndAmbulance(Data.Police_Ambulance);
    setWho_msg(Data.Who_message);
    setHospital(Data.Hosital);
  }, []);
  return (
    <Col>
      <p className="lead display-4">
        Phone numbers of Covid Info and Service centers
      </p>
      <Row className={"m-3"}>
        <Col>
          <Row>
            <Card style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title>Covid Information</Card.Title>

                <Card style={{ width: "23rem" }}>
                  {covidInfo.map((covinfo, key) => (
                    <ListGroup variant="flush" key={key}>
                      <ListGroup.Item>
                        <div>{covinfo.name}</div>
                        <div>{covinfo.num}</div>
                        <div>{covinfo.time}</div>
                      </ListGroup.Item>
                    </ListGroup>
                  ))}
                </Card>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col>
          <Card style={{ width: "25rem" }}>
            <Card.Body>
              <Card.Title>Services </Card.Title>
              <Card style={{ width: "23rem" }}>
                {servicesf.map((covinfo, key) => (
                  <ListGroup variant="flush" key={key}>
                    <ListGroup.Item>
                      <div>{covinfo.name}</div>
                      <div>{covinfo.num}</div>
                    </ListGroup.Item>
                  </ListGroup>
                ))}
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p className="lead display-4">Phone numbers of Police and Ambulance</p>
      <Row>
        {policeAndAmbulance.map((p, key) => (
          <Col className={"m-3"}>
            <div>
              <Card bg="success" text="white" style={{ width: "18rem" }}>
                <Card.Header>{p.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <div>{p.num}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      <p className="lead display-4">WHO WhatsApp information</p>
      <Row>
        <Col>
          {who_msg.map((w, key) => (
            <Card style={{ marginTop: "5px" }}>
              <Card.Header as="h4">{w.language}</Card.Header>
              <Card.Body>
                <Card.Text>
                  <div>
                    send WHO a WhatsApp text. Text {w.Text} to {w.num}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      <p className="lead display-4">All hospital Numbers</p>
      <Row>
        {hospital.map((h, key) => (
          <Col className={"m-3"}>
            <div>
              <Card bg="success" text="white" style={{ width: "18rem" }}>
                <Card.Header>{h.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <div>{h.num}</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default HelpNumbers;
