import React, {Component} from 'react';
// import intl from 'react-intl-universal';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
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
  Avatar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {styles, theme} from './NavigationBarStyles';
import MenuContent from '../submenu/MenuContent';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMore from '@material-ui/icons/ExpandMore';
import menuData from '../submenu/submenuData';

// TODO: need to use props rather than constant array
const menuEffect = {
  INTRO: 'DISCOVER',
  CONTENT: 'SHIFT',
  ORGANIZE: 'EVOLVE',
  NETWORK: 'CREATE'
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      open: false,
      anchorEl: null,
      trianglePosition: 0,
      menuAnchorEl: null,
      activatedMenuName: '',
      left: false,
      sideSubmenuOpen: [false, false, false, false]
    };
    this.headerRef = React.createRef();
  }

  handleClick = (submenuData, headerLinkName) => (e) => {
    if (this.lastCloseMenuTime && Date.now() - this.lastCloseMenuTime < 200 && headerLinkName === this.headerLinkName) {
      return;
    }
    this.headerLinkName = headerLinkName;
    const leftPosition = e.target.getBoundingClientRect().left;
    const menuWidth = e.target.getBoundingClientRect().width;
    this.setState({
      data: submenuData,
      open: true,
      anchorEl: this.headerRef.current,
      trianglePosition: leftPosition + menuWidth / 2.3,
      activatedMenuName: headerLinkName
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.open) {
      this.setState({
        open: false,
        data: null
      });
    }
  };
  handleClose = () => {
    this.lastCloseMenuTime = Date.now();
    this.setState({open: false, anchorEl: null});
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
        }}
      >
        {menuItems.map((itemName, index) => {
          return <MenuItem onClick={() => this.handleOpenPage(routeNames[index])}>{itemName}</MenuItem>;
        })}
      </Menu>
    );
  }

  toggleSidemenu = (side, open) => (event) => {
    this.setState({
      [side]: open
    });
  };

  handleSideSubmenuOpen = (i) => (e) => {
    e.stopPropagation();
    let data = this.state.sideSubmenuOpen.slice();
    data[i] = !data[i];
    this.setState({
      sideSubmenuOpen: data
    });
  };

  getMenuList = () => {
    const sideMenu = [];
    const {classes} = this.props;
    for (let i = 0; i < 4; i++) {
      sideMenu.push(
        <div key={Math.random()}>
          <ListItem button onClick={this.handleSideSubmenuOpen(i)}>
            {this.state.sideSubmenuOpen[i] ? <ExpandMore /> : <ArrowForwardIosIcon style={{fontSize: '14px'}} />}
            <ListItemText primary={menuData[i].name} className={classes.sideMainMenu} />
          </ListItem>
          <Collapse in={this.state.sideSubmenuOpen[i]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {menuData[i].submenu.map((m) => (
                <ListItem key={m.title}>
                  <ListItemText>
                    <Link to={m.link} className={classes.sidemenuLink}>
                      {m.title}
                    </Link>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      );
    }
    return sideMenu;
  };

  sideList(side) {
    const {classes} = this.props;
    return (
      <div role="presentation" onClick={this.toggleSidemenu(side, false)}>
        <List className={classes.list}>{this.getMenuList()}</List>
      </div>
    );
  }

  renderMenuIcon() {
    const {classes} = this.props;
    return (
      <div className={classes.menuButtonContainer}>
        <IconButton className={classes.menuButton} onClick={this.toggleSidemenu('left', true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={this.state.left} onClose={this.toggleSidemenu('left', false)}>
          {this.sideList('left')}
        </Drawer>
      </div>
    );
  }

  renderHeaderLink(headerLinkName, submenu) {
    const {classes} = this.props;
    const {open, activatedMenuName} = this.state;

    return (
      <div style={{position: 'relative', textAlign: 'center', margin: 'auto 2em'}}>
        <div>
          <Button className={classes.navLink} onClick={this.handleClick(submenu, headerLinkName)}>
            {headerLinkName}
          </Button>
        </div>
        {open && headerLinkName === activatedMenuName ? (
          <Typography className={classes.navHover} component="div">
            {menuEffect[headerLinkName]}
          </Typography>
        ) : null}
      </div>
    );
  }

  render() {
    const {classes} = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" ref={this.headerRef}>
          <Toolbar className={classes.toolbar} component="nav">
            <div className={classes.appBarContainer}>
              {this.renderMenuIcon()}
              <div className={classes.navContainer}>
                <div className={classes.navLinkContainer}>
                  {this.renderHeaderLink('INTRO', menuData[0].submenu)}
                  {this.renderHeaderLink('CONTENT', menuData[1].submenu)}
                </div>
                <WebTitle />
                <div className={classes.navLinkContainer}>
                  {this.renderHeaderLink('ORGANIZE', menuData[2].submenu)}
                  {this.renderHeaderLink('NETWORK', menuData[3].submenu)}
                </div>
              </div>
              <MenuContent
                submenuData={this.state.data}
                submenuOpen={this.state.open}
                submenuAnchorEl={this.state.anchorEl}
                submenuClose={this.handleClose}
              />
              <div
                className={classes.triangle}
                style={{
                  left: this.state.trianglePosition,
                  display: this.state.open ? 'block' : 'none'
                }}
              />
              <div className={classes.iconButtonContainer}>
                <IconButton className={classes.metaButton} color="inherit" aria-label="MetaWheel" size={'medium'}>
                  <Avatar alt="MetaWheel" src="/images/metawheelAppBar.png" className={classes.metaIcon} />
                </IconButton>
                <IconButton className={classes.butterflyButton} color="inherit" aria-label="Butterfly" size={'medium'}>
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

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavigationBar));
