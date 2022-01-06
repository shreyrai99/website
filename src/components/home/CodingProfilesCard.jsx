import React from "react";
import Skeleton from "react-loading-skeleton";
import { Col, Card } from "react-bootstrap";

const CodingProfilesCard = ({ profile }) => {
  const { website, companyLogo, description, profileURL } = profile;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Img src={companyLogo} variant="top" />
        <Card.Body>
          <Card.Title as="h5" className="text-center">
            {website || <Skeleton />}{" "}
          </Card.Title>

          <Card.Text className="lead text-center">
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </Card.Text>
          {profileURL ? (
            <a
              href={profileURL}
              className="mt-3 btn btn-outline-secondary mr-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-user" /> View {website} profile
            </a>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CodingProfilesCard;
