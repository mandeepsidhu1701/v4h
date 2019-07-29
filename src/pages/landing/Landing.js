import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { withRouter, Link as RouterLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AnimatedText from '../../components/AnimatedText';
import useTheme from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Modal from '@material-ui/core/Modal';
import SignUpModal, { SIGN_UP } from '../../components/auth/signup';
import SignInModal, { SIGN_IN } from '../../components/auth/signin';

import {
  APP_TITLE,
  SECOND_GENOME
} from '../../common/i18n';

const appTitleDelays = [400, 400, 466.667, 66.6667, 266.667, 133.333, 0, 400, 466.667, 66.6667, 266.667, 133.333, 166.667500, 400, 533.333, 300, 666.667, 500, 566.667, 333.333, 400, 400, 466.667, 66.6667, 0, 266.667, 133.333, 166.667, 500, 400, 533.333, 300];

const styles = theme => ({
  card: {
    width: '100%',
    height: '100%'
  },
  genome: {
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '32px',
    left: '50%',
    zIndex: '1',
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: '1.625rem',
    color: '#1D515F',
    opacity: '0.35'
  },
  authSpan: {
    zIndex: '1',
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '72px',    
    left: '50%',
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: '1.25rem',
    opacity: '0.66',
  },
  modalOverflow: {
    overflow: 'auto',
  },
  authLink: {
    "text-decoration": 'none',
    color: 'white',
    
    "& visited": {
      color: 'white'
    }
  },  
  authSpacer: {
    margin: '0 3.3%',
  },
  siteName: {
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '51%',
    left: '50%',
    zIndex: '1',
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '1',
    color: "white"
  },
  media: {
    backgroundColor: "#C0D2DE",
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '0',
    animation: '7s ease-out 0s 1 scaleAnimation'
  },
  actions: {
    display: 'block',
    textAlign: "center",
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0'
  },
  "@keyframes scaleAnimation": {
    from: { opacity: '0.5', transform: 'scale(1.2)' },
    to: { opacity: '1', transform: 'scale(1)' }
  },


  modalTesting: {
    fontSize: '2rem',
    textalign: 'center',
    color: 'white',
  }
});


class Landing extends React.Component {
  state = {
    showModal: false,
    authForm: SIGN_UP
  };

  handleScrollButtonClick = () => {
    this.props.history.push("/home");
  };

  handleShowLoginForm = () => {
    this.setState(
      {
        authForm: SIGN_IN,
        showModal: true
      }
    );
  }

  handleShowSignUpForm = () => {
    this.setState(
      {
        authForm: SIGN_UP,
        showModal: true
      }
    );
  }

  handleHideForms = () => {
    this.setState(
      {
        showModal: false
      }
    );
  }

  render() {
    const { classes } = this.props;

    const { showModal, authForm } = this.state;

    return (
      <Card className={classes.card}>
        <span 
          className={classes.genome}
        >
          {intl.get(SECOND_GENOME)}
        </span>
        <span 
          className={classes.authSpan}
        >
          <RouterLink 
            to="#" 
            className={classes.authLink}
            onMouseEnter={this.handleShowSignUpForm}
            onClick={this.handleShowSignUpForm}
          >
            Sign Up
          </RouterLink>
          <span className={classes.authSpacer} />
          <RouterLink
            to="#" 
            className={classes.authLink}
            onMouseEnter={this.handleShowLoginForm}
            onClick={this.handleShowLoginForm}
          >
            Sign In
          </RouterLink>
        </span>
        <div className={classes.siteName}>
          <AnimatedText text={intl.get(APP_TITLE)} delays={appTitleDelays}/>
        </div>
        <CardMedia
          className={classes.media}
          image="/images/matt-hardy-562566-unsplash@2x.png"
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Scroll" onClick={this.handleScrollButtonClick}>
            <img src='/images/scroll-icon-png_02-.png' width={24} height={32.6} alt='scroll' />
          </IconButton>
        </CardActions>
        <Modal 
          open={showModal} 
          onClose={this.handleHideForms} 
          className={classes.modalOverflow}
        >
          { 
            authForm === SIGN_UP ?
            <SignUpModal handleCloseForm={this.handleHideForms} /> :
            <SignInModal handleCloseForm={this.handleHideForms} />
          }
        </Modal>
      </Card>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Landing));
