import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = (btnColor, bgImage) =>
  makeStyles({
    content: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: '100%',
      backgroundRepeat: 'none',
      height: '320px',
      width: '100%',
      color: 'white',
      position: 'relative'
    },
    btn: {
      width: '65px',
      height: '24px',
      backgroundColor: btnColor,
      borderRadius: '4px',
      fontSize: '0.8em',
      fontWeight: 'normal',
      letterSpacing: '1px',
      textAlign: 'center',
      lineHeight: '1.8',
      float: 'right',
      marginRight: '20px',
      marginTop: '20px'
    },
    linkStyle: {
      textDecoration: 'none',
      color: 'white'
    },
    bottomContainer: {
      height: '35%',
      backgroundColor: 'rgba(23, 23, 23,0.7)',
      position: 'absolute',
      bottom: '0',
      padding: '4%',
      overflow: 'hidden'
    },
    videoHeading: {
      fontWeight: 'bold',
      fontSize: '1em',
      letterSpacing: '4px',
      marginBottom: '0.5em'
    },
    videoDes: {
      fontWeight: 'normal',
      fontSize: '0.6em',
      letterSpacing: '1px',
      lineHeight: '2',
      opacity: '0.5'
    }
  });

function OrganizeVideoBox(props) {
  const classes = useStyles(props.btnColor, props.videoBgImage)();
  return (
    <div className={classes.content}>
      <div className={classes.btn}>
        <a href="#" className={classes.linkStyle}>
          {props.btnTitle}
        </a>
      </div>
      <div className={classes.bottomContainer}>
        <Typography className={classes.videoHeading}>{props.videoName}</Typography>
        <Typography className={classes.videoDes}>{props.videoDescription}</Typography>
      </div>
    </div>
  );
}

export default OrganizeVideoBox;
