import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  text: {
    display: 'inline-block',
    opacity: '0',
    marginRight: '0.2em',
    animationName: 'textAnimation',
    animationDuration: '0.5s',
    animationIterationCount: '1',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-out'
  },
  "@keyframes textAnimation": {
    from: {
      transform: 'scale(3, 3)',
      opacity: '0'
    },
    to: {
      transform: 'scale(1, 1)',
      opacity: '1'
    }
  }
})

class AnimatedText extends Component {

  render() {
    const { classes, delays, text } = this.props;
    return (
      text.split('').map((letter, index) => {
        if(letter === ' ') {
          return (<span style={{marginRight: '0.2em'}} />)
        } else {
          return (<span className={classes.text} style={{animationDelay: delays[index] + 'ms'}}>{letter.toUpperCase()}</span>)
        }
      })
    )
  }
}

export default withStyles(styles)(AnimatedText);