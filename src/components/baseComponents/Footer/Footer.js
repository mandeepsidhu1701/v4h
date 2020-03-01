import React, {Component} from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import './footer.css';

const styles = (theme) => ({
  root: {
    color: 'red'
  }
});

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

class Footer extends Component {
  render() {
    const {classes} = this.props;
    const preventDefault = (event) => event.preventDefault();
    return (
      <footer>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography className="HCN" variant="h5">
                HCN
              </Typography>
            </Grid>
            <Grid item>
              <ul>
                <li>
                  <Link
                    href="#"
                    onClick={preventDefault}
                    className="footer-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    href="#"
                    onClick={preventDefault}
                    variant="body2"
                    className="footer-link"
                  >
                    Intro
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    href="#"
                    onClick={preventDefault}
                    variant="body2"
                    className="footer-link"
                  >
                    content
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    href="#"
                    onClick={preventDefault}
                    variant="body2"
                    className="footer-link"
                  >
                    organize
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    href="#"
                    onClick={preventDefault}
                    variant="body2"
                    className="footer-link"
                  >
                    connect
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick="window.scrollTo({top: 0, behavior: 'smooth'})"
                    className="footer-link"
                  >
                    Go to top
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
