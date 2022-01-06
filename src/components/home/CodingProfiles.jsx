import React from "react";
import { Container, Row } from "react-bootstrap";
import CodingProfilesCard from "./CodingProfilesCard";

const CodingProfiles = ({ heading, message, data }) => {
  return (
    <section className="section" id="cpprofiles">
      <Container>
        <div fluid className="container-fluid text-sm-center p-5 bg-light">
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          <Row>
            {data.map((profile, index) => {
              return <CodingProfilesCard key={index} profile={profile} />;
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CodingProfiles;
