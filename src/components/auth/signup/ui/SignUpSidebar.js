import React, { Component } from "react";
import { withStyles, Grid } from '@material-ui/core';
import Sphere from '../../../baseComponents/sphere';
import { sideBarStyles } from '../styles';

class SignUpSidebar extends Component {

  render() {

    const { classes } = this.props;
    return ( 
      <aside className={classes.signUpSidebarBase}>
        <Grid container className={classes.signUpSidebarSection}>
          <Grid item xs={12} sm={8}>
              <p className={`${classes.signUpSidebarHeading} ${classes.textGreen}`}>HEALTH</p>
              <p className={classes.signUpSidebarText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.signUpSidebarSphereContainer}>
              <Sphere type={0} sphereRad={50} width={90} height={90} />
            </div>
          </Grid>
        </Grid>
            
        <Grid container className={classes.signUpSidebarSection}>
          <Grid item xs={12} sm={8}>
              <p className={`${classes.signUpSidebarHeading} ${classes.textBlue}`}>PROSPERITY</p>
              <p className={classes.signUpSidebarText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.signUpSidebarSphereContainer}>
              <Sphere type={1} sphereRad={50} width={90} height={90}/>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.signUpSidebarSection}>
          <Grid item xs={12} sm={8}>
              <p className={`${classes.signUpSidebarHeading} ${classes.textPink}`}>INSPIRATION</p>
              <p className={classes.signUpSidebarText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.signUpSidebarSphereContainer}>
              <Sphere type={2} sphereRad={50} width={90} height={90}/>
            </div>
          </Grid>
        </Grid>
          
        <Grid container className={classes.signUpSidebarSection}>
          <Grid item xs={12} sm={8}>
              <p className={`${classes.signUpSidebarHeading} ${classes.textYellow}`}>JOY</p>
              <p className={classes.signUpSidebarText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.signUpSidebarSphereContainer}>
              <Sphere type={3} sphereRad={50} width={90} height={90}/>
            </div>
          </Grid>
        </Grid>
      </aside>
    );
  }
}


export default withStyles(sideBarStyles)(SignUpSidebar);