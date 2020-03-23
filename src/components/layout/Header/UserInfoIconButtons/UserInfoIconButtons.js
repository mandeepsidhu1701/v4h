import React from 'react';
import {IconButton, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {styles} from './UserInfoIconButtonsStyles';

import ButterflyImage from '@/assets/images/icons/butterflyAppBar.png';
import MetaWheelImage from '@/assets/images/icons/metawheelAppBar.png';

const useStyles = makeStyles(styles);

const UserInfoIconButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.iconButtonContainer}>
      <IconButton className={classes.metaButton} color="inherit" aria-label="MetaWheel" size={'medium'}>
        <Avatar alt="MetaWheel" src={MetaWheelImage} className={classes.metaIcon} />
      </IconButton>
      <IconButton className={classes.butterflyButton} color="inherit" aria-label="Butterfly" size={'medium'}>
        <Avatar alt="Butterfly" src={ButterflyImage} className={classes.butterflyIcon} />
      </IconButton>
    </div>
  );
};

export default UserInfoIconButtons;
