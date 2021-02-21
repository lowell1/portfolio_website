// import "./meyer_reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "reactstrap";

export default () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-secondary">
        <Nav />
        <Container className="p-3" fluid>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Container>
      </div>
    </BrowserRouter>
  );
};
