import React from "react";

import { Col, Card } from "react-bootstrap";
const ToolsAndLanguagesCard = ({ data }) => {
  return (
    <Col xs={4} sm={3} md={3} lg={2} xl={2}>
      <div className="pb-5 text-center">
        <img
          className=" bg-white mb-3 center"
          src={data.skillLogo}
          alt=""
          width="100%"
          maxWidth="50px"
        />
        <p className="lead">{data.skill}</p>
      </div>
    </Col>
  );
};

export default ToolsAndLanguagesCard;
