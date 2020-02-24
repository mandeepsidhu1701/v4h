import React, { Component } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Typography, Link, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    backgroundColor: "#434343"
  },
  homeLink: {
    color: "#CFCFCF",
    [theme.breakpoints.only("xl")]: {
      fontSize: "1.625rem"
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "1.5rem"
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.325rem"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.25rem"
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.125rem"
    }
  },
  footerLink: {
    marginLeft: "10px !important",
    color: "#F4F4F4",
    [theme.breakpoints.only("xl")]: {
      fontSize: "0.875rem"
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: "0.75rem"
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "0.625rem"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "0.5rem"
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.75rem",
      display: "block",
      textAlign: "center",
      padding: "0.5rem 3rem 0.5rem 0"
    }
  }
});

const footerLinks = [
  {
    link: "/home",
    text: "HOME"
  },
  {
    link: "/intro",
    text: "INTRO"
  },
  {
    link: "/content",
    text: "CONTENT"
  },
  {
    link: "/organize",
    text: "ORGANIZE"
  },
  {
    link: "/contact",
    text: "CONTACT"
  }
];

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Container maxWidth="lg">
          <footer>
            <Grid container>
              <Grid item sm={3} xs={12}>
                <Link
                  component={RouterLink}
                  to="/"
                  className={classes.homeLink}
                >
                  HCN
                </Link>
              </Grid>
              <Grid
                container
                item
                sm
                xs={12}
                justify="flex-end"
                direction="row"
                alignItems="baseline"
              >
                <Typography>
                  {footerLinks.map((link, index) => (
                    <Link
                      component={RouterLink}
                      key={index}
                      to={link.link}
                      className={classes.footerLink}
                    >
                      {link.text}
                    </Link>
                  ))}
                </Typography>
              </Grid>
            </Grid>
          </footer>
        </Container>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
