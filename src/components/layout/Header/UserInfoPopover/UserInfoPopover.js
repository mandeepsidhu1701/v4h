import React from 'react';
import {makeStyles, Card, Avatar, Box, Grid, Typography, Divider, Paper, Link, IconButton} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Popover from 'material-ui-popup-state/HoverPopover';
import {bindPopover} from 'material-ui-popup-state/hooks';

import {styles} from './UserInfoPopoverStyles';

import MetaWheelImage from '@/assets/images/icons/metawheelAppBar.png';

const useStyles = makeStyles(styles);

const UserInfoPopover = (props) => {
  const classes = useStyles();
  return (
    <Popover
      {...bindPopover(props.popupState)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left'
      }}
      elevation={0}
      className={classes.root}
    >
      <Card className={classes.card}>
        <div className={classes.triangle} />
        <Paper className={classes.content} variant="outlined">
          <Grid container spacing={1} justify="space-between">
            <Grid item container direction="row" justify="flex-start" alignItems="center" md={6} xs={12}>
              <Grid item md={4} xs={3}>
                <Avatar className={classes.avatar} src={'https://i.pravatar.cc/300'} />
              </Grid>
              <Grid item>
                <Typography variant="h6" component="h2">
                  Jane Adams
                </Typography>
                <Typography variant="body2" component="p">
                  janeadams@gmail.com
                </Typography>
                <Link href="#" className={classes.link}>
                  Edit Profile
                </Link>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem className={classes.verticalDivider} />
            <Grid item xs={12} className={classes.horizontalDividerContainer}>
              <Divider className={classes.horizontalDivider} variant="middle" />
            </Grid>
            <Grid item md={4} xs={9}>
              <Typography variant="body2" component="p" className={classes.sanctuaryProfileSwitch}>
                Switch to
              </Typography>
              <Box className={classes.sanctuaryProfileLogoContainer} component="div">
                <img className={classes.sanctuaryProfileLogo} src={MetaWheelImage} alt="Sanctuary Profile Logo" />
                <Link href="#" className={classes.link}>
                  Sanctuary Profile
                </Link>
              </Box>
            </Grid>
            <Grid item md={1} xs={3} container direction="row" justify="flex-end" alignItems="center">
              <IconButton color="default" aria-label="go to sanctuary profile">
                <ArrowForwardIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Card>
    </Popover>
  );
};

export default UserInfoPopover;
