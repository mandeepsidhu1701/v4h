import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {styles} from './WebTitleStyles'

class WebTitle extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <Typography component="span" className={classes.navLogo}>
        <span className={classes.navTextNearCentre}>Second</span>
        <span className={classes.navTextCentre}>HCN</span>
        <span className={classes.navTextNearCentre}>Genome</span>
      </Typography>
    );
  }
}

export default withStyles(styles)(WebTitle);