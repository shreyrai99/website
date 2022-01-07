import React from "react";
import { Container, Row } from "react-bootstrap";
import ToolsAndLanguagesCard from "./ToolsAndLanguagesCard";

const ToolsAndLanguages = ({ toolsAndLanguages }) => {
  return (
    <div id="toolsAndLanguages">
      <section className="section">
        <div fluid className="container-fluid text-sm-center p-5 bg-light">
          <h2 className="display-4 mb-5 text-center">
            {toolsAndLanguages.heading}
          </h2>
          <p className="lead text-center">{toolsAndLanguages.message}</p>
          <Row>
            {toolsAndLanguages.data.map(data => {
              return <ToolsAndLanguagesCard key={data.skill} data={data} />;
            })}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ToolsAndLanguages;
