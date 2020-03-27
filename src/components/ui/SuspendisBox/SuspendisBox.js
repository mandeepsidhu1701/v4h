import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const styles = (theme) => ({
  content: {
    overflow: 'hidden',
    color: 'white'
  },
  textCollection: {
    marginTop: '-50px'
  },
  textContent: {
    textShadow: '0 10px 50px rgba(0, 0, 0, 0.53)',
    fontSize: '1.5em',
    lineHeight: '2'
  },
  quote: {
    fontWeight: 'bold',
    letterSpacing: '3px',
    fontFamily: 'Courier',
    fontSize: '100px',
    lineHeight: '1'
  }
});

function SuspendisBox(props) {
  const {classes} = props;
  return (
    <div className={classes.content}>
      <Typography className={classes.quote} align="center">
        "
      </Typography>
      <div className={classes.textCollection}>
        <Typography className={classes.textContent} align="center">
          Suspendisse
        </Typography>
        <Typography className={classes.textContent} align="center">
          {' '}
          pretium{' '}
        </Typography>
        <Typography className={classes.textContent} align="center">
          commodo tempor.{' '}
        </Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(SuspendisBox);
