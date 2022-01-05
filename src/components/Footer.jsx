import React from "react";
import Container from "react-bootstrap/Container";

const Footer = props => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/shreyrai99"
          aria-label="My GitHub"
        >
          Kumar Shrey
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted">
            Computer Science student from Birla Institute of Technology, Mesra
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
