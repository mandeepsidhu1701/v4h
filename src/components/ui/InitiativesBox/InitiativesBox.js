import React from 'react';
import * as messageKeys from '@/locales';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = (InitiativesBg) =>
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

function InitiativesBox(props) {
  const classes = useStyles(props.initiativesBg)();
  return (
    <div className={classes.content}>
      <Typography className={classes.heading}>{messageKeys.ORGANIZE_INITIATIVESBOX_TITLE}</Typography>
      <div className={classes.bottomContainer}>
        <Typography className={classes.bottomHeading}>{messageKeys.ORGANIZE_INITIATIVESBOX_VISION}</Typography>
        <Typography className={classes.bottomHeading}>{messageKeys.ORGANIZE_INITIATIVESBOX_MISSION}</Typography>
        <Typography className={classes.bottomHeading}>{messageKeys.ORGANIZE_INITIATIVESBOX_CHARACTER}</Typography>
        <Typography className={classes.bottomHeading}>{messageKeys.ORGANIZE_INITIATIVESBOX_CREATION}</Typography>
        <Typography className={classes.bottomHeading}>{messageKeys.ORGANIZE_INITIATIVESBOX_METAWHEEL}</Typography>
        <Typography className={classes.bottomHeading}>{messageKeys.ORGANIZE_INITIATIVESBOX_INITIATIVES}</Typography>
      </div>
    </div>
  );
}

export default InitiativesBox;
