import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import styles from './ScrollLinkStyles';

export class ScrollLink extends Component {
  render() {
    const {classes, to, children, clicked} = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Link className={classes.link} to={to} onClick={clicked}>
            {children}
          </Link>
          <div className={classes.scrollLine}>
            <div></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ScrollLink);
