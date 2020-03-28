import React from 'react';
import {Typography, Avatar, withStyles} from '@material-ui/core';

const styles = (theme) => ({
  content: {
    padding: '4% 20px'
  },
  heading: {fontWeight: 'bold', letterSpacing: '5px', marginTop: '0.5em'},
  textBox: {
    marginTop: '1.3em',
    fontSize: '1em',
    fontWeight: 'normal',
    letterSpacing: '2px',
    lineHeight: '1.5',
    [`@media (max-width:768px)`]: {
      fontSize: '0.75em',
      lineHeight: '1.2'
    }
  },

  text: {
    fontSize: '0.8em',
    lineHeight: '1.8',
    letterSpacing: '1px',
    opacity: '0.9'
  },
  viewBtn: {
    margin: '0.8em auto',
    width: '160px',
    height: '28px',
    border: 'solid 2px #d2a75f',
    fontSize: '0.8em',
    lineHeight: '2.2',
    textAlign: 'center',
    letterSpacing: '1.5px',
    '&:hover': {
      backgroundColor: '#d2a75f'
    }
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold'
  }
});

function OrganizeGuideBox(props) {
  const {classes} = props;
  return (
    <div className={classes.content}>
      <Typography align="center" className={classes.heading}>
        GUIDE
      </Typography>
      <div className={classes.textBox}>
        {' '}
        <Typography className={classes.text}>{props.guideContent}</Typography>
      </div>
      <div className={classes.viewBtn}>
        <a href="#" className={classes.linkStyle}>
          TAKE ME THERE
        </a>
      </div>
    </div>
  );
}

export default withStyles(styles)(OrganizeGuideBox);
