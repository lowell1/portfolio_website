import "../styles/meyer_reset.css";
import "../styles/global.scss";
import "./app.scoped.scss";
import React from "react";
import Nav from "../nav/Nav";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../Footer";
import { BrowserRouter, Route } from "react-router-dom";

export default () => {
  return (
    <div className="app">
      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </main>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
