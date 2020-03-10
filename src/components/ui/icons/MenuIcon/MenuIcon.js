import React from 'react';
import {withStyles, Grid} from '@material-ui/core';

import styles from './MenuIconStyles';

function MenuIcon(props) {
  const {classes} = props;
  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
      <Grid item className={classes.line}></Grid>
      <Grid item className={classes.line}></Grid>
    </Grid>
  );
}

export default withStyles(styles)(MenuIcon);
