import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import routes from "../../../data/routes";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
  typography: {
    button: {
      letterSpacing: '3px',
      padding: '0.25rem',
      fontWeight: 'bold',
      margin: '0 8px',
      fontSize: '0.5rem',
      [defaultTheme.breakpoints.only('xl')]: {
        fontSize: '1rem'
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: '0.875rem'
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: '0.75rem'
      },
    },
  }
});

const styles = theme => ({
    toolbar: {
      flexGrow: 1,
      padding: '8px'
    },
    appBarContainer: {
      display: 'flex',
      justify: 'space-between',
      alignContent: 'center',
      width: '100%'
    },
    menuButtonContainer: {
      '@media (min-width:801px)': {
        display: 'none',
      }
    },
    menuButton: {
      padding: '8px'
    },
    navContainer: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      '@media (min-width:801px)': {
        marginLeft: '12.5%',
      }
    },
    navLinkContainer: {
      display: 'flex',
      justifyContent: 'center',
      '@media (max-width:800px)': {
        display: 'none',
      }
    },
    navLogo: {
      position: 'relative',
      padding: '0.7rem 0.5rem 0 0.5rem',
    },
    navTextNearCentre: {
      margin: 0,
      color: '#AAAAAA',
      letterSpacing: '2px',
      [theme.breakpoints.only('xl')]: {
        fontSize: '0.875rem'
      },
      [theme.breakpoints.only('lg')]: {
        fontSize: '0.75rem'
      },
      [theme.breakpoints.only('md')]: {
        fontSize: '0.625rem'
      },
      [theme.breakpoints.only('sm')]: {
        fontSize: '0.5rem'
      },
      [theme.breakpoints.only('xs')]: {
        fontSize: '0.325rem'
      },
    },
    navTextCentre: {
      position: 'relative',
      top: '0.25rem',
      margin: '0 0.25rem',
      fontWeight: '900',
      letterSpacing: '2px',
      [theme.breakpoints.only('xl')]: {
        fontSize: '1.625rem'
      },
      [theme.breakpoints.only('lg')]: {
        fontSize: '1.5rem'
      },
      [theme.breakpoints.only('md')]: {
        fontSize: '1.325rem'
      },
      [theme.breakpoints.only('sm')]: {
        fontSize: '1.25rem'
      },
      [theme.breakpoints.only('xs')]: {
        fontSize: '1.125rem'
      },
    },
    navLink: {
      ...theme.typography.button
    },
    iconButtonContainer: {
      marginRight: '2%',
      padding: '0 2px',
      border: '1px solid #BBBBBB',
      borderRadius: '36px'
    },
    metaButton: {
      marginRight: '4px'
    },
    butterflyButton: {

    },
    metaIcon: {
      width: '24px',
      height: '24px'
    },
    butterflyIcon: {
      width: '24px',
      height: '24px'
    }
  });

class NavBar extends Component {

  state = {
    anchorEl: null
  }

  handleMenuClose = () => {
    this.setState({
      anchorEl: null
    });
  }

  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleOpenPage = (url) => {
    this.props.history.push(url);
  }

  render() {
    const { classes } = this.props;

    const { anchorEl } = this.state;
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
                      width: 120,
                    },
                  }}
                >
                  <MenuItem onClick={() => this.handleOpenPage(routes.Home)}>Intro</MenuItem>
                  <MenuItem onClick={() => this.handleOpenPage(routes.Content)}>Content</MenuItem>
                  <MenuItem onClick={() => this.handleOpenPage(routes.Organize)}>Organize</MenuItem>
                  <MenuItem onClick={() => this.handleOpenPage(routes.Connect)}>Connect</MenuItem>
                </Menu>
              </div>

              <div className={classes.navContainer}>
                <div className={classes.navLinkContainer}>
                  <Button className={classes.navlink} component={RouterLink} to={routes.Home}>
                    INTRO
                  </Button>
                  <Button className={classes.navlink} component={RouterLink} to="#">
                    CONTENT
                  </Button>
                </div>
                <Typography component="span" className={classes.navLogo}>
                  <span className={classes.navTextNearCentre}>Second</span>
                  <span className={classes.navTextCentre}>HCN</span>
                  <span className={classes.navTextNearCentre}>Genome</span>
                </Typography>
                <div className={classes.navLinkContainer}>
                  <Button className={classes.navlink} component={RouterLink} to="#">
                    ORGANIZE
                  </Button>
                  <Button className={classes.navlink} component={RouterLink} to="#">
                    CONNECT
                  </Button>
                </div>
              </div>
              <div className={classes.iconButtonContainer}>
                <IconButton className={classes.metaButton} color="inherit" aria-label="MetaWheel">
                  <Avatar alt="MetaWheel" src="/images/metawheelAppBar.png" className={classes.metaIcon} />
                </IconButton>
                <IconButton className={classes.butterflyButton} color="inherit" aria-label="Butterfly">
                  <Avatar alt="Butterfly" src="/images/butterflyAppBar.png" className={classes.butterflyIcon} />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(NavBar));
