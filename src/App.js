/*global FB*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
  APP_TITLE
} from './common/i18n';

import intl from 'react-intl-universal'
import LandingContainer from './pages/landing/LandingContainer';

const locales = {
  "en-US": require('./common/locales/en-US.js'),
  "de-DE": require('./common/locales/de-DE.js'),
};

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MiniDrawer extends React.Component {
  
  currentLocale = "en-US";

  constructor(props){
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
    this.state = {
      open: false,
    };
    // react-intl-universal is singleton, so you should init it only once in your app
    intl.init({
      currentLocale: this.currentLocale,
      locales,
    }).then(() => {
      document.title = intl.get(APP_TITLE);
    });
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  componentDidMount(){
    let that = this;
    window.fbAsyncInit = function() {
      FB.init({
        appId            : '2409222039321987',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.2'
      });
      FB.getLoginStatus(function(response){
        console.log("getLoginStatus",response)
        if(response.status==='connected')
        {
          that.responseFacebook();
        }
      })
      FB.Event.subscribe('auth.statusChange', function(response) {
        if (response.authResponse) {
          console.log("auth.statusChange", response);
          that.responseFacebook();
        } else {
          console.log('---->User cancelled login or did not fully authorize.');
        }
      });
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  responseFacebook = () => {
    this.setState({
      loggedIn:true
    });
  }

  onScroll = () => {
    this.setState({ redirect: true });
  }

  render() {
    return (
      <LandingContainer />
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);