import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  errorBar: {
    color: 'rgba(255,72,72,1.0)',
    fontFamily: 'Calibri sans-serif monospace',
    transform: 'scale(.9, 1)',
    letterSpacing: '1px',
    marginLeft: '-2.66rem',
    fontSize: '1rem'
  }
});     

class ErrorBar extends Component {

  render () {
    const {classes} = this.props;
    return (
        <p className={classes.errorBar}>
          <strong>Error:</strong> {this.props.error}
        </p>
    )
  }
}

export default withStyles(styles)(ErrorBar);