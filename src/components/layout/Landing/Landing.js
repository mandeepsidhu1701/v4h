import React from 'react';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles, Modal, Box, Grid} from '@material-ui/core';
import {AnimatedText, Sphere} from '../../ui';
import {SignUpContainer as SignUpModal, SIGN_UP, SignInContainer as SignInModal, SIGN_IN} from '../../base/auth';
import styles from './LandingStyles';

import mainBackground from '../../../assets/images/layout/mainBackground.png';
import {ScrollLink} from '../../ui';

//TODO: what to do about spheres, correct size and position for small real-estate screens / mobile?

//TODO: test all links: sanctuary store, connect me, take me deeper, metawheel, fix links that are not working.

//TODO: update second genome logo to on mobile always show authlinks

//TODO: test interactions on different screen sizes and in mobile and desktop.

const appTitleDelays = [
  0,
  400,
  266.667,
  133.333,
  66.6667,
  166.6675,
  400,
  533.333,
  300,
  666.667,
  500,
  566.667,
  333.333,
  400,
  400,
  466.667,
  66.6667,
  0,
  266.667,
  133.333,
  166.667,
  500,
  400,
  533.333,
  300
];

const landingState = {
  SHOW: 'SHOW',
  SCROLL: 'SCROLL',
  HIDE: 'HIDE'
};

class Landing extends React.Component {
  state = {
    landing: landingState.SHOW,
    showModal: false,
    authForm: SIGN_UP,
    showAuthLinks: false,
    showSphereSideBar: false
  };

  handleShowAuthLinks = () => {
    this.setState({showAuthLinks: true});
  };

  handleShowLoginForm = () => {
    this.setState({
      authForm: SIGN_IN,
      showModal: true
    });
  };

  handleShowSignUpForm = () => {
    this.setState({
      authForm: SIGN_UP,
      showModal: true
    });
  };

  handleHideForms = () => {
    this.setState({
      showModal: false
    });
  };

  handleScrollLanding = () => {
    this.setState({landing: landingState.SCROLL, showSphereSideBar: false});

    setTimeout(() => {
      this.handleHideLanding();
      this.props.onAnimationEnd();
    }, 750);
    this.props.hideContent();
  };

  handleHideLanding = () => {
    this.setState({landing: landingState.HIDE});
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSphereSideBar: true
      });
    }, 1000);
  }

  render() {
    const {landing, showModal, authForm, showAuthLinks} = this.state;
    const {classes} = this.props;
    let landingRoot;
    if (landing === landingState.SCROLL) {
      landingRoot = `${classes.landingRoot} ${classes.landingScrollUp}`;
    } else if (landing === landingState.HIDE) {
      landingRoot = classes.hidden;
    } else {
      landingRoot = classes.landingRoot;
    }

    let highlightedAuthLinkClass = null;
    if (showModal) {
      highlightedAuthLinkClass = classes.authLinkHighlight;
    }

    return (
      <div className={landingRoot}>
        <Box component="div" className={`${classes.background}`}>
         <div className={`${classes.landingImage} ${classes.landingImageAnimation}`}></div>
        </Box>

        <Grid className={classes.main}>
          <Grid className={classes.title} container direction="row" justify="center" alignItems="center">
            <Grid item>
              <span
                className={classes.genome}
                onMouseEnter={this.handleShowAuthLinks}
                onClick={this.handleShowAuthLinks}
              >
                Second Genome
              </span>
            </Grid>
          </Grid>
          <Box
            component="span"
            display={{xs: 'block', sm: 'none'}}
            className={`${classes.fontBase} ${classes.authSpan} ${showAuthLinks ? classes.display : ''}`}
          >
            <RouterLink
              to="#"
              className={authForm === SIGN_UP ? `${classes.authLink} ${highlightedAuthLinkClass}` : classes.authLink}
              onClick={this.handleShowSignUpForm}
            >
              SIGN UP
            </RouterLink>
            <span className={classes.authSpacer} />
            <RouterLink
              to="#"
              className={authForm === SIGN_IN ? `${classes.authLink} ${highlightedAuthLinkClass}` : classes.authLink}
              onClick={this.handleShowLoginForm}
            >
              SIGN IN
            </RouterLink>
          </Box>

          <Box component="div" className={classes.siteName} display={{xs: 'none', sm: 'block'}}>
            <AnimatedText text={'Higher Consciousness Network'} delays={appTitleDelays} />
          </Box>
          <Box component="div" className={classes.siteName} display={{xs: 'block', sm: 'none'}}>
            <AnimatedText text={'HCN'} delays={appTitleDelays} />
          </Box>

          {this.state.showSphereSideBar ? (
            <div className={classes.sphereSideBar}>
              <RouterLink className={classes.sphereLink} to="/organize/health">
                <Sphere type={0} sphereRad={60} width={100} height={100} />
              </RouterLink>
              <RouterLink className={classes.sphereLink} to="/organize/prosperity">
                <Sphere type={1} sphereRad={60} width={100} height={100} />
              </RouterLink>
              <RouterLink className={classes.sphereLink} to="/organize/inspiration">
                <Sphere type={2} sphereRad={60} width={100} height={100} />
              </RouterLink>
              <RouterLink className={classes.sphereLink} to="/organize/joy">
                <Sphere type={3} sphereRad={60} width={100} height={100} />
              </RouterLink>
            </div>
          ) : null}

          <div className={classes.closeIconButton}>
            <Grid container direction="row" justify="center" alignItems="center">
              <Grid item>
                <ScrollLink to={'#'} clicked={() => this.handleScrollLanding()}>
                  scroll
                </ScrollLink>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Modal open={showModal} onClose={this.handleHideForms} className={classes.modalOverflow}>
          <div>
            {authForm === SIGN_UP ? (
              <SignUpModal handleCloseForm={this.handleHideForms} />
            ) : (
              <SignInModal handleCloseForm={this.handleHideForms} />
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Landing));
