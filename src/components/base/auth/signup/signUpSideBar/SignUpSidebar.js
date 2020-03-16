import React, {Component} from 'react';
import {withStyles, Grid} from '@material-ui/core';
import {Sphere} from '../../../../ui';
import {sideBarStyles} from './Styles';
import intl from 'react-intl-universal';
import * as messageKeys from '@/locales';

class SignUpSidebar extends Component {
  render() {
    const {classes} = this.props;
    return (
      <aside className={classes.signUpSidebarBase}>
        <Grid container className={classes.signUpSidebarSection}>
          <Grid item xs={12} sm={8}>
            <p className={`${classes.signUpSidebarHeading} ${classes.textGreen}`}>{intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_HEALTH_HEADING)}</p>
            <p className={classes.signUpSidebarText}>
              {intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_HEALTH_TEXT)}
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
            <p className={`${classes.signUpSidebarHeading} ${classes.textBlue}`}>{intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_PROSPERITY_HEADING)}</p>
            <p className={classes.signUpSidebarText}>
              {intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_PROSPERITY_TEXT)}
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.signUpSidebarSphereContainer}>
              <Sphere type={1} sphereRad={50} width={90} height={90} />
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.signUpSidebarSection}>
          <Grid item xs={12} sm={8}>
            <p className={`${classes.signUpSidebarHeading} ${classes.textPink}`}>{intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_INSPIRATION_HEADING)}</p>
            <p className={classes.signUpSidebarText}>
              {intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_INSPIRATION_TEXT)}
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.signUpSidebarSphereContainer}>
              <Sphere type={2} sphereRad={50} width={90} height={90} />
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.signUpSidebarSection}>
          <Grid item xs={12} sm={8}>
            <p className={`${classes.signUpSidebarHeading} ${classes.textYellow}`}>{intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_JOY_HEADING)}</p>
            <p className={classes.signUpSidebarText}>
              {intl.get(messageKeys.AUTH_SIGNUP_SIDEBAR_JOY_TEXT)}
            </p>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.signUpSidebarSphereContainer}>
              <Sphere type={3} sphereRad={50} width={90} height={90} />
            </div>
          </Grid>
        </Grid>
      </aside>
    );
  }
}

export default withStyles(sideBarStyles)(SignUpSidebar);
