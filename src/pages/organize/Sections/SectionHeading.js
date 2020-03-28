import React from 'react';
import {withStyles, Typography, Grid} from '@material-ui/core';
import styles from './SectionHeadingStyle';
import {Sphere} from '@/components/ui';

function SectionHeading({humanImage, title, description, classes, subHeading}) {
  return (
    <Grid container className={classes.content}>
      <Grid item md={8} sm={8} xs={12} className={classes.headingPart}>
        <div className={classes.humanimg}>
          <img src={humanImage} className={classes.img} />
        </div>
        <Typography className={classes.mainHeading}>{title}</Typography>
        <div className={classes.linkContainer}>{subHeading()}</div>
        <Typography className={classes.contentDescription}>{description}</Typography>
      </Grid>
      <Grid item md={4} sm={8} xs={12} className={classes.spherePart}>
        <Sphere type={0} sphereRad={60} width={120} height={120} />
        <Sphere type={1} sphereRad={60} width={120} height={120} />
        <Sphere type={2} sphereRad={60} width={120} height={120} />
        <Sphere type={3} sphereRad={60} width={120} height={120} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SectionHeading);
