import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  word: {
    marginRight: '1rem',
    display: 'inline-block'
  },
  text: {
    display: 'inline-block',
    opacity: '0',
    paddingRight: '0.66rem',
    animationName: '$textAnimation',
    animationDuration: '0.5s',
    animationIterationCount: '1',
    animationFillMode: 'forwards',
    animationTimingFunction: 'ease-out',
    [theme.breakpoints.only('xs')]: {
      paddingRight: '0.0325rem',
    }
  },
  '@keyframes textAnimation': {
    from: {
      transform: 'scale(3, 2.9)',
      opacity: '0'
    },
    to: {
      transform: 'scale(1, 0.9)',
      opacity: '0.98'
    }
  }
});

class AnimatedText extends Component {
  render() {
    const {classes, delays, text} = this.props;

    return text.split(' ').map((word, index) => {
      if (word.length > 0) {
        return (
          <span key={index} className={classes.word}>
            {word.split('').map((letter, idx) => {
              return (
                <span
                  key={index + '_' + idx}
                  className={classes.text}
                  style={{animationDelay: delays[idx + index] +'ms'}}
                >
                  {letter.toUpperCase()}
                </span>
              );
            })}
          </span>
        );
      } else {
        return null;
      }
    });

    // return text.split('').map((letter, index) => {
    //   if (letter === ' ') {
    //     return <span key={index} style={{marginRight: '1rem'}} />;
    //   } else {
    //     return (
    //       <span key={index} className={classes.text} style={{animationDelay: delays[index] + 'ms'}}>
    //         {letter.toUpperCase()}
    //       </span>
    //     );
    //   }
    // });
  }
}

export default withStyles(styles)(AnimatedText);
