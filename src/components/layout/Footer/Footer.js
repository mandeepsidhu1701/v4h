import React, {Component} from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import styles from './FooterStyle';
import menuData from '../Header/Submenu/submenuData';

class Footer extends Component {
  getMenu() {
    const menu = [];
    for (let i = 0; i < 4; i++) {
      menu.push(
        <Grid item xs={12} sm={6} md={3} key={i}>
          <ul style={styles.linkStyle}>
            <li>
              {' '}
              <Link to="#" variant="body2" style={styles.footerTitle}>
                {menuData[i].name}
              </Link>
            </li>
            {menuData[i].submenu.map((m, index) => (
              <li key={index}>
                <Link to={m.link} variant="body2" style={styles.footerLink}>
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
      <footer style={styles.footerStyle}>
        <Container maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={4} lg={4} sm={2} xs={12}>
              <Typography style={styles.hcn} variant="h5">
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

export default Footer;
