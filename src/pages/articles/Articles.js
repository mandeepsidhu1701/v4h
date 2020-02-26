import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  }
});

class Articles extends Component {
  handleClick = (param) => {
    console.log('this is:', param);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>

      </React.Fragment>)


  }
}

export default withStyles(styles)(Articles);
