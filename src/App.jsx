import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

export default () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </>
  );
};
