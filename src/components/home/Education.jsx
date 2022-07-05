import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";

const Education = ({ education }) => {
  return (
    <div
      id="education"
      fluid
      className="container-fluid text-sm-center p-5 bg-light m-0"
    >
      <section className="section">
        <Container>
          <h2 className="display-4 mb-5 text-center">{education.heading}</h2>
          <Row>
            {education.data.map(data => (
              <Col key={data._id} md={6}>
                <EducationCard key={data.institute} data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Education;
