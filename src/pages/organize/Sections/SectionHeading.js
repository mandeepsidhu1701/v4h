import React from 'react';
import {withStyles, Typography, Container, Grid} from '@material-ui/core';
import styles from './SectionHeadingStyle';
import {Sphere} from '@/components/ui';
import globeIcon from '@/assets/images/icons/globe-02.png';
import ssanctuaryIcon from '@/assets/images/icons/sanctuary-03.png';

function SectionHeading({title, description, classes}) {
  return (
    <Grid container className={classes.content}>
      <Grid item md={8} sm={12}>
        {' '}
        <Typography className={classes.mainHeading}>{title}</Typography>
        <div className={classes.linkContainer}>
          {' '}
          <div className={classes.oneLink}>
            <img className={classes.linkIcon} src={globeIcon} />
            <span>Vitality and Longevity</span>
          </div>
          <div className={classes.oneLink}>
            <img className={classes.linkIcon} src={ssanctuaryIcon} />
            <span>Bio-interdependence</span>
          </div>
        </div>
        <Typography className={classes.contentDescription}>{description}</Typography>
      </Grid>
      <Grid item md={4}>
        {/* <div style={{float: 'right'}}>
          <Sphere type={0} sphereRad={60} width={120} height={120} />
          <Sphere type={1} sphereRad={60} width={120} height={120} />
          <Sphere type={2} sphereRad={60} width={120} height={120} />
          <Sphere type={3} sphereRad={60} width={120} height={120} />
        </div> */}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SectionHeading);
