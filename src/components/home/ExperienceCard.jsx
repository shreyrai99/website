import React from "react";

import { Col, Card } from "react-bootstrap";
const ExperienceCard = ({ data }) => {
  return (
    <Col lg="12">
      <div className="pb-5 text-center">
        <img
          className=" bg-white mb-3 center"
          src={data.companylogo}
          alt=""
          width="100%"
          maxWidth="200px"
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
