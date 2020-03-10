import * as React from 'react';
import {Grid, withStyles} from '@material-ui/core';
import {styles} from './WebTitleStyles';

class WebTitle extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.navLogo}>
        <span className={classes.navTextNearCentre}>Second</span>
        <span className={classes.navTextCentre}>HCN</span>
        <span className={classes.navTextNearCentre}>Genome</span>
      </Grid>
    );
  }
}

export default withStyles(styles)(WebTitle);
