import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import InitiativesBg from '@/assets/images/organize/InitiativesBg.png';

const useStyles = () =>
  makeStyles({
    content: {
      backgroundImage: `url(${InitiativesBg})`,
      backgroundSize: '100%',
      backgroundRepeat: 'none',
      height: '450px',
      width: '100%',
      position: 'relative',
      textAlign: 'center',
      paddingTop: '2em',
      [`@media (max-width:768px)`]: {
        height: '200px'
      }
    },
    heading: {
      fontSize: '1em',
      letterSpacing: '5px',
      fontWeight: 'bold'
    },
    bottomContainer: {
      height: '4%',
      width: '92%',
      backgroundColor: 'rgba(0,0,0,0.64)',
      position: 'absolute',
      bottom: '0',
      padding: '2% 4%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      [`@media (max-width:768px)`]: {
        padding: '1%',
        width: '98%',
        height: '4%'
      }
    },
    bottomHeading: {
      color: '#d2a75f',
      fontWeight: 'bold',
      fontSize: '0.9em',
      letterSpacing: '2.5px',
      marginBottom: '0.5em',
      display: 'inline-block',
      [`@media (max-width:768px)`]: {
        fontSize: '0.3em',
        letterSpacing: '2px',
        marginBottom: '0.6em'
      }
    }
  });

function InitiativesBox() {
  const classes = useStyles()();
  return (
    <div className={classes.content}>
      <Typography className={classes.heading}>INITIATIVES</Typography>
      <div className={classes.bottomContainer}>
        <Typography className={classes.bottomHeading}>VISION</Typography>
        <Typography className={classes.bottomHeading}>MISSION</Typography>
        <Typography className={classes.bottomHeading}>CHARACTER</Typography>
        <Typography className={classes.bottomHeading}>LOREM IPSUM</Typography>
        <Typography className={classes.bottomHeading}>DOLOR SIT AMET</Typography>
      </div>
    </div>
  );
}

export default InitiativesBox;
