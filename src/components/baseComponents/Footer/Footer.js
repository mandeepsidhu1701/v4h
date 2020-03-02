import React, {Component} from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import './footer.css';
import {contentSubmenu, connectSubmenu, organizeSubmenu, introSubmenu} from '../submenu/submenuData';

const styles = (theme) => ({
  root: {
    color: 'red'
  }
});

class Footer extends Component {
  render() {
    const preventDefault = (event) => event.preventDefault();
    return (
      <footer>
        <Container maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={4} lg={4} sm={2} xs={12}>
              <Typography className="HCN" variant="h5">
                HCN
              </Typography>
            </Grid>
            <Grid item md={8} lg={8} sm={10} xs={12}>
              <Grid container>
                <Grid item xs={12} sm={6} md={3}>
                  <ul>
                    <li>
                      {' '}
                      <Link href="#" onClick={preventDefault} variant="body2" className="footer-title">
                        INTRO
                      </Link>
                    </li>
                    {introSubmenu.map((m, index) => (
                      <li key={index}>
                        <Link to={m.link} variant="body2" className="footer-link">
                          {m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ul>
                    <li>
                      {' '}
                      <Link href="#" onClick={preventDefault} variant="body2" className="footer-title">
                        CONTENT
                      </Link>
                    </li>
                    {contentSubmenu.map((m, index) => (
                      <li key={index}>
                        <Link to={m.link} variant="body2" className="footer-link">
                          {m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ul>
                    <li>
                      {' '}
                      <Link href="#" onClick={preventDefault} variant="body2" className="footer-title">
                        ORGANIZE
                      </Link>
                    </li>
                    {organizeSubmenu.map((m, index) => (
                      <li key={index}>
                        <Link to={m.link} variant="body2" className="footer-link">
                          {m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ul>
                    <li>
                      {' '}
                      <Link href="#" onClick={preventDefault} variant="body2" className="footer-title">
                        CONNECT
                      </Link>
                    </li>
                    {connectSubmenu.map((m, index) => (
                      <li key={index}>
                        <Link to={m.link} variant="body2" className="footer-link">
                          {m.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
