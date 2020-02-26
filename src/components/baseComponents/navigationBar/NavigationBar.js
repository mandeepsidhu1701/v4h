import React, {Component} from 'react';
import intl from 'react-intl-universal';
import ReactDOM from 'react-dom'
import {Link as RouterLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../../data/routes';
import WebTitle from '../webTitle/WebTitle';
import {
    withStyles,
    Button,
    IconButton,
    AppBar,
    Toolbar,
    Menu,
    MenuItem,
    MuiThemeProvider,
    Avatar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {styles, theme} from './NavigationBarStyles';
import MenuContent from '../../submenu/MenuContent';
import {contentSubmenu, networkSubmenu} from '../../submenu/submenuData';

// TODO: need to use props rather than constant array
const menuItems = ['Intro', 'Content', 'Organize', 'Connect'];
const routeNames = [routes.Home, routes.Content, routes.Organize, routes.Connect];

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            open: false,
            anchorEl: null,
            trianglePosition: 0,
            menuAnchorEl: null
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
            menuAnchorEl: ReactDOM.findDOMNode(this.refs.header),
            trianglePosition: leftPosition + (menuWidth / 2.3)
        })
    }
    handleClose = () => {
        this.setState({data: null, open: false, anchorEl: null})
    }

    handleMenuClose = () => {
        this.setState({anchorEl: null});
    };

    handleMenuOpen = (event) => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleOpenPage = (url) => {
        this
            .props
            .history
            .push(url);
    };

    renderMenuItem(menuItems, routeNames) {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
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
            }}>
                {menuItems.map((itemName, index) => {
                    return (
                        <MenuItem onClick={() => this.handleOpenPage(routeNames[index])}>
                            {itemName}
                        </MenuItem>
                    );
                })}
            </Menu>
        );
    }

    renderMenuIcon() {
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        return (
            <div className={classes.menuButtonContainer}>
                <IconButton
                    className={classes.menuButton}
                    aria-label="Main Menu"
                    aria-owns={open
                    ? 'main-menu'
                    : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenuOpen}>
                    <MenuIcon/>
                </IconButton>
                {this.renderMenuItem(menuItems, routeNames)}
            </div>
        );
    }

    renderHeaderLink(headerLinkName, submenu) {
        const {classes} = this.props;
        return (
            <Button className={classes.navLink} onClick={this.handleClick(submenu)}>
                {headerLinkName}
            </Button>
        );
    }

    render() {
        const {classes} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar} component="nav">
                        <div className={classes.appBarContainer}>
                            {this.renderMenuIcon()}
                            <div className={classes.navContainer}>
                                <div className={classes.navLinkContainer}>
                                    {this.renderHeaderLink('INTRO', contentSubmenu)}
                                    {this.renderHeaderLink('CONTENT', contentSubmenu)}
                                </div>
                                <WebTitle/>
                                <div className={classes.navLinkContainer}>
                                    {this.renderHeaderLink('ORGANIZE', contentSubmenu)}
                                    {this.renderHeaderLink('CONNECT', networkSubmenu)}
                                </div>

                            </div>
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
                            <div className={classes.iconButtonContainer}>
                                <IconButton
                                    className={classes.metaButton}
                                    color="inherit"
                                    aria-label="MetaWheel"
                                    size={'medium'}>
                                    <Avatar
                                        alt="MetaWheel"
                                        src="/images/metawheelAppBar.png"
                                        className={classes.metaIcon}/>
                                </IconButton>
                                <IconButton
                                    className={classes.butterflyButton}
                                    color="inherit"
                                    aria-label="Butterfly"
                                    size={'medium'}>
                                    <Avatar
                                        alt="Butterfly"
                                        src="/images/butterflyAppBar.png"
                                        className={classes.butterflyIcon}/>
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
    classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavigationBar));
