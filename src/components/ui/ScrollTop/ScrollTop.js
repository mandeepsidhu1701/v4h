import React from 'react';
import {withStyles, Button} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import styles from './ScrollTopStyle';

function ScrollTop({scrollStepInPx, delayInMs, classes}) {
  let intervalId;
  const scrollStep = () => {
    if (window.pageYOffset === 0 && intervalId) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    intervalId = setInterval(scrollStep, delayInMs);
  };

  return (
    <Button variant="contained" size="small" onClick={scrollToTop} className={classes.btnStyle}>
      <ExpandLessIcon />
    </Button>
  );
}

export default withStyles(styles)(ScrollTop);
