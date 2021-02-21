import React from "react";
import { Jumbotron, Container } from "reactstrap";
export default () => {
  return (
    <Container>
      <Jumbotron className="mx-auto">
        <h1 className="display-5">Welcome to Lowell's portfolio</h1>
        <p className="lead">
          Thank you for visiting! I am an Alumni of the Full-Stack Web
          development course at Lambda School with experience in React, Node.js,
          and HTML/CSS. My interests include programming, web accessibility, and
          playing video games (very poorly).
        </p>
      </Jumbotron>
    </Container>
  );
};
