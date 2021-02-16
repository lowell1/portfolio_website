import "./meyer_reset.css";
import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});
export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};
