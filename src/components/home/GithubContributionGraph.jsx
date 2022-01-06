import React, { useState, useEffect } from "react";
import GitHubCalendar from "github-calendar";
import { Container } from "react-bootstrap";
const GithubContributionGraph = ({ username }) => {
  const [heading, setHeading] = useState("");
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js`;
    GitHubCalendar(".calendar", username, { responsive: true });

    setHeading("Open Source Contribution Graph");
  }, [username]);
  return (
    <Container>
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="calendar"></div>
    </Container>
  );
};

export default GithubContributionGraph;
