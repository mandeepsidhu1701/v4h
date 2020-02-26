import React from 'react';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, IconButton, Modal, Grid, Button } from '@material-ui/core';
import {
  Sphere,
  AnimatedText,
  BackVideoWithNavBarWrapper as PageWrapper
} from '../../components/baseComponents';
import SignUpModal, { SIGN_UP } from '../../components/auth/signup';
import SignInModal, { SIGN_IN } from '../../components/auth/signin';

import routes from '../../data/routes';

import {
  CarouselSlide
} from '../../components/baseComponents/CorePrinciplesCarousel';

import styles from './HomeStyles';

//TODO: what to do about spheres, correct size and position for small real-estate screens / mobile?

//TODO: test all links: sanctuary store, connect me, take me deeper, metawheel, fix links that are not working.

//TODO: update second genome logo to on mobile always show authlinks

//TODO: test interactions on different screen sizes and in mobile and desktop.

import data from '../../data/homeData';

const { volunteerVideoURL } = data;

const appTitleDelays = [
  400,
  400,
  466.667,
  66.6667,
  266.667,
  133.333,
  0,
  400,
  466.667,
  66.6667,
  266.667,
  133.333,
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

class Home extends React.Component {
  state = {
    landing: landingState.SHOW,
    showModal: false,
    authForm: SIGN_UP,
    showAuthLinks: false,
  };


  handleShowAuthLinks = () => {
    this.setState({ showAuthLinks: true });
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
    this.setState({ landing: landingState.SCROLL });
    setTimeout(() => {
      this.handleHideLanding();
    }, 500);
  };

  handleHideLanding = () => {
    this.setState({ landing: landingState.HIDE });
  };

  render() {
    const {
      landing,
      showModal,
      authForm,
      showAuthLinks
    } = this.state;
    const { classes } = this.props;

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

    const slides = data.corePrincipals.map((principle, i) => {
      return (
        <CarouselSlide
          key={principle.name}
          imageURL={principle.image}
          title={principle.name}
          text={principle.text}
        />
      );
    });

    return (
      <React.Fragment>
        <div className={landingRoot}>
          <img
            src="/images/matt-hardy-562566-unsplash@2x.png"
            alt="Background aesthetics"
            className={`${classes.landingImage} ${classes.landingImageAnimation}`}
          />
          <span
            className={classes.genome}
            onMouseEnter={this.handleShowAuthLinks}
            onClick={this.handleShowAuthLinks}
          >
            Second Genome
          </span>
          <span
            className={
              showAuthLinks
                ? `${classes.fontBase} ${classes.authSpan}`
                : classes.hidden
            }
          >
            <RouterLink
              to="#"
              className={
                authForm === SIGN_UP
                  ? `${classes.authLink} ${highlightedAuthLinkClass}`
                  : classes.authLink
              }
              onMouseEnter={this.handleShowSignUpForm}
              onClick={this.handleShowSignUpForm}
            >
              SIGN UP
            </RouterLink>
            <span className={classes.authSpacer} />
            <RouterLink
              to="#"
              className={
                authForm === SIGN_IN
                  ? `${classes.authLink} ${highlightedAuthLinkClass}`
                  : classes.authLink
              }
              onMouseEnter={this.handleShowLoginForm}
              onClick={this.handleShowLoginForm}
            >
              SIGN IN
            </RouterLink>
          </span>

          <div className={classes.siteName}>
            <AnimatedText
              text={'Higher Consciousness Network'}
              delays={appTitleDelays}
            />
          </div>

          <div className={classes.sphereSideBar}>
            <RouterLink className={classes.sphereLink} to={routes.Health}>
              <Sphere type={0} sphereRad={60} width={100} height={100} />
            </RouterLink>
            <RouterLink className={classes.sphereLink} to={routes.Prosperity}>
              <Sphere type={1} sphereRad={60} width={100} height={100} />
            </RouterLink>
            <RouterLink className={classes.sphereLink} to={routes.Inspiration}>
              <Sphere type={2} sphereRad={60} width={100} height={100} />
            </RouterLink>
            <RouterLink className={classes.sphereLink} to={routes.Joy}>
              <Sphere type={3} sphereRad={60} width={100} height={100} />
            </RouterLink>
          </div>

          <div className={classes.closeIconButton}>
            <IconButton
              ref="landingScrollRef"
              aria-label="Close Landing Drawer"
              onClick={() => {
                this.handleScrollLanding();
              }}
            >
              <img
                src="/images/scroll-icon-png_02-.png"
                width={24}
                height={32}
                alt="Close Landing Drawer"
              />
            </IconButton>
          </div>

          <Modal
            open={showModal}
            onClose={this.handleHideForms}
            className={classes.modalOverflow}
          >
            {authForm === SIGN_UP ? (
              <SignUpModal handleCloseForm={this.handleHideForms} />
            ) : (
                <SignInModal handleCloseForm={this.handleHideForms} />
              )}
          </Modal>
        </div>
      </React.Fragment >
    );
  }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Home));
