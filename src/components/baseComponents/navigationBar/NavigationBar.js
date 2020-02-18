import React, {Component} from 'react';
import intl from 'react-intl-universal';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../../data/routes';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {MuiThemeProvider} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';

import {styles, theme} from './NavigationBarStyles';

class NavigationBar extends Component {
  state = {
    anchorEl: null
  };

  handleMenuClose = () => {
    this.setState({anchorEl: null});
  };

  handleMenuOpen = (event) => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleOpenPage = (url) => {
    this.props.history.push(url);
  };

  render() {
    const {classes} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar} component="nav">
            <div className={classes.appBarContainer}>
              <div className={classes.menuButtonContainer}>
                <IconButton
                  className={classes.menuButton}
                  aria-label="Main Menu"
                  aria-owns={open ? 'main-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="main-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleMenuClose}
                  PaperProps={{
                    style: {
                      maxHeight: 400,
                      width: 120
                    }
                  }}
                >
                  <MenuItem onClick={() => this.handleOpenPage(routes.Home)}>
                    Intro
                  </MenuItem>
                  <MenuItem onClick={() => this.handleOpenPage(routes.Content)}>
                    Content
                  </MenuItem>
                  <MenuItem
                    onClick={() => this.handleOpenPage(routes.Organize)}
                  >
                    Organize
                  </MenuItem>
                  <MenuItem onClick={() => this.handleOpenPage(routes.Connect)}>
                    Connect
                  </MenuItem>
                </Menu>
              </div>

              <div className={classes.navContainer}>
                <div className={classes.navLinkContainer}>
                  <Button
                    className={classes.navLink}
                    component={RouterLink}
                    to={routes.Home}
                  >
                    INTRO
                  </Button>
                  <Button
                    className={classes.navLink}
                    component={RouterLink}
                    to="#"
                  >
                    CONTENT
                  </Button>
                </div>
                <Typography component="span" className={classes.navLogo}>
                  <span className={classes.navTextNearCentre}>Second</span>
                  <span className={classes.navTextCentre}>HCN</span>
                  <span className={classes.navTextNearCentre}>Genome</span>
                </Typography>
                <div className={classes.navLinkContainer}>
                  <Button
                    className={classes.navLink}
                    component={RouterLink}
                    to="#"
                  >
                    ORGANIZE
                  </Button>
                  <Button
                    className={classes.navLink}
                    component={RouterLink}
                    to="#"
                  >
                    CONNECT
                  </Button>
                </div>
              </div>
              <div className={classes.iconButtonContainer}>
                <IconButton
                  className={classes.metaButton}
                  color="inherit"
                  aria-label="MetaWheel"
                >
                  <Avatar
                    alt="MetaWheel"
                    src="/images/metawheelAppBar.png"
                    className={classes.metaIcon}
                  />
                </IconButton>
                <IconButton
                  className={classes.butterflyButton}
                  color="inherit"
                  aria-label="Butterfly"
                >
                  <Avatar
                    alt="Butterfly"
                    src="/images/butterflyAppBar.png"
                    className={classes.butterflyIcon}
                  />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavigationBar));
