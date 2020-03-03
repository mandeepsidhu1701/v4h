import React, {Component} from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import './footer.css';
import menuData from '../Header/Submenu/submenuData';

const styles = (theme) => ({
  root: {
    color: 'red'
  }
});

class Footer extends Component {
  getMenu() {
    const menu = [];
    for (let i = 0; i < 4; i++) {
      menu.push(
        <Grid item xs={12} sm={6} md={3} key={i}>
          <ul>
            <li>
              {' '}
              <Link to="#" variant="body2" className="footer-title">
                {menuData[i].name}
              </Link>
            </li>
            {menuData[i].submenu.map((m, index) => (
              <li key={index}>
                <Link to={m.link} variant="body2" className="footer-link">
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      );
    }

    return menu;
  }
  render() {
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
              <Grid container>{this.getMenu()}</Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
