import React from "react";

import { Col, Card } from "react-bootstrap";
const EducationCard = ({ data }) => {
  return (
    <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Img src={data.logo} variant="top" />

      <Card.Body>
        <Card.Title>{data.institute}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{data.degree}</Card.Subtitle>

        <Card.Text as="div"></Card.Text>
        <Card.Text>{data.details}</Card.Text>
      </Card.Body>
      <Card.Footer>{data.marks}</Card.Footer>
    </Card>
  );
};

export default EducationCard;
