import React, {Component} from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import ReactDOM from 'react-dom'
import {Link as RouterLink} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {contentSubmenu, networkSubmenu} from '../components/submenu/submenuData';
import MenuContent from '../components/submenu/MenuContent';

/*
  TODO: update signed-in section to show correct butterfly and sanctuary images, for signed in status, and correct links and notifications.
        double check with redux functions for managing sign in, sign out etc if needed.
*/

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        }
    },
    typography: {
        button: {
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: 'Montserrat, Roboto, Sans-Serif',
            letterSpacing: '3px',
            margin: '0 8px'
        }
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
        marginLeft: '4%'
    },
    menuButton: {
        marginTop: 4
    },
    navLinkContainer: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 8px'
    },
    navLink: {
        padding: 2,
        ...theme.typography.button
    },
    navLinkCentre: {
        margin: '0 4px',
        fontSize: 24,
        fontWeight: '900',
        letterSpacing: '3px'
    },
    navLinkNearCentre: {
        fontSize: 12,
        color: '#AAAAAA',
        fontWeight: '500',
        fontVariant: 'normal',
        letterSpacing: '3px'
    },
    logoContainer: {
        marginRight: '4%',
        padding: '4px',
        border: '1px solid #BBBBBB',
        borderRadius: '36px'
    },
    logoButton: {
        marginRight: '4px'
    },
    logoAltButton: {},
    triangle: {
        position: 'absolute',
        margin: 'auto',
        bottom: -2.5,
        transform: 'rotate(225deg)',
        '-webkit-transform': 'rotate(225deg)',
        '-moz-transform': 'rotate(225deg)',
        '-o-transform': 'rotate(225deg)',
        '-ms-transform': 'rotate(225deg)',
        borderRight: 'solid #c0c0c0 1px',
        borderBottom: 'solid #c0c0c0 1px',
        width: '6px',
        height: '6px',
        backgroundColor: '#ffffff',
        zIndex: 10
    }
});

// TODO: change the navbar to use grid, and collapse the main menu properly,
// upon hitting small device size.

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            open: false,
            anchorEl: null,
            trianglePosition: 0
        }
    }

    handleClick = (submenuData) => (e) => {
        const leftPosition = e
            .target
            .getBoundingClientRect()
            .left
        const menuWidth = e
            .target
            .getBoundingClientRect()
            .width
        this.setState({
            data: submenuData,
            open: true,
            anchorEl: ReactDOM.findDOMNode(this.refs.header),
            trianglePosition: leftPosition + (menuWidth / 2.3)
        })
    }
    handleClose = () => {
        this.setState({data: null, open: false, anchorEl: null})
    }
    render() {
        const {classes} = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar} component="nav">
                        <div className={classes.appBarContainer}>
                            <div className={classes.menuButtonContainer}>
                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                    <MenuIcon/>
                                </IconButton>
                            </div>
                            <div className={classes.navLinkContainer}>
                                <Button className={classes.navlink} component={RouterLink} to="#">
                                    INTRO
                                </Button>
                                <Button
                                    className={classes.navlink}
                                    component={RouterLink}
                                    onClick={this.handleClick(contentSubmenu)}
                                    to="#">
                                    CONTENT
                                </Button>
                                <Button className={classes.navlink} component={RouterLink} to="#">
                                    <div className={classes.navLinkNearCentre}>Second</div>
                                    <div className={classes.navLinkCentre}>HCN</div>
                                    <div className={classes.navLinkNearCentre}>Genome</div>
                                </Button>
                                <Button className={classes.navlink} component={RouterLink} to="#">
                                    ORGANIZE
                                </Button>
                                <Button
                                    className={classes.navlink}
                                    component={RouterLink}
                                    onClick={this.handleClick(networkSubmenu)}>
                                    CONNECT
                                </Button>
                                <MenuContent
                                    submenuData={this.state.data}
                                    submenuOpen={this.state.open}
                                    submenuAnchorEl={this.state.anchorEl}
                                    submenuClose={this.handleClose}/>
                                <div
                                    className={classes.triangle}
                                    style={{
                                    left: this.state.trianglePosition,
                                    display: this.state.open
                                        ? 'block'
                                        : 'none'
                                }}/>
                            </div>
                            <div className={classes.logoContainer}>
                                <IconButton className={classes.logoButton} color="inherit" aria-label="Logo">
                                    <DeleteIcon/>
                                </IconButton>
                                <IconButton
                                    className={classes.logoAltButton}
                                    color="inherit"
                                    aria-label="Logo Alt">
                                    <AddIcon/>
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
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
