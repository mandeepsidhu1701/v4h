import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import styles from './SectionHeadingStyle';
// Styled Component
import {Typography, Grid} from '@material-ui/core';
import {Sphere} from '@/components/ui';

const useStyles = makeStyles(styles);

function SectionHeading({humanImage, title, description, subHeading}) {
  const classes = useStyles();
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
        <RouterLink to="/organize/health">
          <Sphere type={0} sphereRad={60} width={120} height={120} />
        </RouterLink>
        <RouterLink to="/organize/prosperity">
          <Sphere type={1} sphereRad={60} width={120} height={120} />
        </RouterLink>
        <RouterLink to="/organize/inspiration">
          <Sphere type={2} sphereRad={60} width={120} height={120} />
        </RouterLink>
        <RouterLink to="/organize/joy">
          <Sphere type={3} sphereRad={60} width={120} height={120} />
        </RouterLink>
      </Grid>
    </Grid>
  );
}

export default SectionHeading;
