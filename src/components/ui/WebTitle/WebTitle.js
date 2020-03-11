import * as React from 'react';
import {Grid, withStyles} from '@material-ui/core';
import {styles} from './WebTitleStyles';
import intl from 'react-intl-universal';
import * as messageKeys from '@/locales';

class WebTitle extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.navLogo}>
        <span className={classes.navTextNearCentre}>{intl.get(messageKeys.HEADER_TITLE_LEFT)}</span>
        <span className={classes.navTextCentre}>HCN</span>
        <span className={classes.navTextNearCentre}>{intl.get(messageKeys.HEADER_TITLE_RIGHT)}</span>
      </Grid>
    );
  }
}

export default withStyles(styles)(WebTitle);
