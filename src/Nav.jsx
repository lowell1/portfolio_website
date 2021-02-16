import React from "react";
import { AppBar, Toolbar, Typography, Drawer, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "black",
    // "& > * > *": {
    //   color: "white",
    // },
    "& > * > * + *": {
      marginLeft: "1rem",
    },
  },
});

export default () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Link color="textPrimary" href="/">
          Home
        </Link>
        <Link color="textPrimary" href="/projects">
          Projects
        </Link>
        <Link color="textPrimary" href="/contact">
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
};

/**
 <Drawer anchor="top" open={true}>
        <Link href="/">home</Link>
        {/* <MuiLink component={Link} to="/projects">
          projects
        </MuiLink> 
        <Link href="/projects">projects</Link>
      </Drawer>
 */
