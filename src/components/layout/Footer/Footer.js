import React, {Component} from 'react';
import {Typography, Grid, Container, withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import styles from './FooterStyle';
import menuData from '../Header/Submenu/submenuData';
import ScrollTop from '../../ui/ScrollTop/ScrollTop';

class Footer extends Component {
  getMenu() {
    const {classes} = this.props;
    const menu = [];
    for (let i = 0; i < 4; i++) {
      menu.push(
        <Grid item xs={12} sm={6} md={3} key={i}>
          <ul className={classes.linkStyle}>
            <li>
              {' '}
              <Link to="#" variant="body2" className={classes.footerTitle}>
                {menuData[i].name}
              </Link>
            </li>
            {menuData[i].submenu.map((m, index) => (
              <li key={index}>
                <Link to={m.link} variant="body2" className={classes.footerLink}>
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
    const {classes} = this.props;
    return (
      <footer className={classes.footerStyle}>
        <Container maxWidth="lg">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={4} lg={4} sm={2} xs={12}>
              <Typography className={classes.hcn} variant="h5">
                HCN
              </Typography>
            </Grid>
            <Grid item md={8} lg={8} sm={10} xs={12}>
              <Grid container>{this.getMenu()}</Grid>
            </Grid>
          </Grid>
        </Container>
        <ScrollTop scrollStepInPx="50" delayInMs="16.66" />
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
