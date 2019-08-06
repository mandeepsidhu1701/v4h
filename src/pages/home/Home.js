import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withRouter, Link as RouterLink } from "react-router-dom";
import routes from '../../data/routes';

import AnimatedText from '../../components/common/ui/AnimatedText';
import PageWrapper from '../../components/common/BackVideoWithAppBarWrapper';
import Sphere from '../../components/common/ui/sphere';

import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

import SignUpModal, { SIGN_UP } from '../../components/auth/signup';
import SignInModal, { SIGN_IN } from '../../components/auth/signin';
import { userRequestForgotPasswordSubmit } from '../../actions/auth';

import {Carousel, CarouselSlide} from '../../components/home/CorePrinciplesCarousel';

import styles from './HomeStyles';


//TODO: what to do about spheres, correct size and position for small real-estate screens / mobile?

//TODO: finish Carousel section

//TODO: test all links: sanctuary store, connect me, take me deeper, metawheel, fix links that are not working.

//TODO: update second genome logo to on mobile always show authlinks

//TODO: test interactions on different screen sizes and in mobile and desktop.


import data from '../../data/homeData';

const { volunteerVideoURL } = data;

const appTitleDelays = [400, 400, 466.667, 66.6667, 266.667, 133.333, 0, 400, 466.667, 66.6667, 266.667, 133.333, 166.667500, 400, 533.333, 300, 666.667, 500, 566.667, 333.333, 400, 400, 466.667, 66.6667, 0, 266.667, 133.333, 166.667, 500, 400, 533.333, 300];

const landingState = {
  SHOW: "SHOW",
  SCROLL: "SCROLL",
  HIDE: "HIDE"
}

class Home extends React.Component {

  state = {
    landing: landingState.HIDE,
    showModal: false,
    authForm: SIGN_UP,
    showAuthLinks: false,
    playingVolunteerVideo: false,
  }

  componentDidMount() {
    this.refs.vidRef.addEventListener("ended", () => {this.setState({playingVolunteerVideo: false})});
  }

  componentDidUnMount() {
    this.refs.vidRef.removeEventListener("ended", () => {this.setState({playingVolunteerVideo: false})});
  }

  handleShowAuthLinks = () => {
    this.setState({showAuthLinks: true});
  }

  handleVolunteerVideoState = () => {
    this.refs.vidRef.play();
    this.setState({playingVolunteerVideo: true});
  }

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

  handleScrollLanding = () => {
    this.setState({landing: landingState.SCROLL});
    setTimeout(() => {this.handleHideLanding()}, 1000);
  }

  handleHideLanding = () => {
    this.setState({landing: landingState.HIDE});
  }

  render() {
    const { landing, showModal, authForm, playingVolunteerVideo, showAuthLinks } = this.state;
    const { classes } = this.props;

    let rootClass;
    if (landing === landingState.SCROLL) {
      rootClass = `${classes.landingRoot} ${classes.landingScrollUp}`;
    }
    else if (landing === landingState.HIDE) {
      rootClass = classes.hidden;
    } else {
      rootClass = classes.landingRoot;
    }

    let highlightedAuthLinkClass = null;
    if (showModal) {
      highlightedAuthLinkClass = classes.authLinkHighlight;
    }

    const slides = data.corePrincipals.map((principle, i) => {
      return (
        <CarouselSlide key={principle.name} imageURL={principle.image} title={principle.name} text={principle.text} />
      );
    });

    return (
      <React.Fragment>
        <div className={rootClass}>
          <img 
            src="/images/matt-hardy-562566-unsplash@2x.png" 
            alt="Background aesthetics"
            className={classes.landingImage}
          />
          <span
            className={classes.genome}
            onMouseEnter={this.handleShowAuthLinks}
            onClick={this.handleShowAuthLinks}
          >
            Second Genome
          </span>
          <span
            className={showAuthLinks ? `${classes.fontBase} ${classes.authSpan}` : classes.hidden}
          >
            <RouterLink 
              to="#" 
              className={authForm === SIGN_UP ? `${classes.authLink} ${highlightedAuthLinkClass}` : classes.authLink}
              onMouseEnter={this.handleShowSignUpForm}
              onClick={this.handleShowSignUpForm}
            >
              SIGN UP
            </RouterLink>
            <span className={classes.authSpacer} />
            <RouterLink
              to="#" 
              className={authForm === SIGN_IN ? `${classes.authLink} ${highlightedAuthLinkClass}` : classes.authLink}
              onMouseEnter={this.handleShowLoginForm}
              onClick={this.handleShowLoginForm}
            >
              SIGN IN
            </RouterLink>
          </span>

          <div className={classes.siteName}>
            <AnimatedText text={"Higher Consciousness Network"} delays={appTitleDelays}/>
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
            <IconButton ref="landingScrollRef" aria-label="Close Landing Drawer" onClick={() => {this.handleScrollLanding()}}>
              <img src='/images/scroll-icon-png_02-.png' width={24} height={32} alt='Close Landing Drawer' />
            </IconButton>
          </div>

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
        </div>
        <PageWrapper 
          source="https://media.istockphoto.com/videos/beautiful-water-surface-in-slow-motion-looped-animation-hd-1080-video-id473357245"
          className={classes.overflowHidden}
        >
          <Grid container className={classes.gridContainerPadding}>
            <Grid item xs={1} sm={2} md={3}>
            </Grid>
            <Grid item xs={10} sm={8} md={6}>
              <p className={classes.inspireQuote}>
                "A dream you dream alone is only a dream. A dream you dream together is reality."
              </p>
              <p className={classes.inspireQuoteCitation}>JOHN LENNON & YOKO ONO</p>
            </Grid>
            <Grid item xs={1} sm={2} md={3}>
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainerPadding}>
            <Grid item xs={12} sm={12} md={4}>
              <p className={`${classes.paragraphTextSmall} ${classes.siteDescriptionContainer}`}>
                HCN is a "Metamorphic Media" site aimed at elevating Global Consciousness via valuable quotes, affirmations, articles, videos and visualizations. 
                Content is being generated to integrate with the forth coming "Sanctuary Project" and the services of human and global advancement architecture that the project offers.
                Engage with HCN and holistically advance; physically, mentally, emotionally and spiritually, to possess greater awareness and a surplus capacity to effortlessly help others and the progression of the planet.
                HCN is also a platform that brings together a network of like minded Conscious Creatures (conscious; consumers, producers, creators and communicators) as a collective representation to transform our world. 
                Consume, Contribute, Disperse, and Sponsor media which uplifts the human spirit, empowers people and nurtures the planet.
              </p>
              <p className={classes.paragraphTextSmall}>
                Second Genome, and it's messenger system, represents how we as humans and humanity have the ability to evolve beyond our current state to collectively create Inter-Generational Global Family Wealth. 
                Connect as a Conscious Creature on this site and learn more of what that means! <RouterLink to="#">Connect Me!</RouterLink>
              </p>
            </Grid>
            <Grid item md={8}>
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainerPadding}>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container>
                <Grid item xs={12} sm={12} md={7}>
                  <Grid container>
                    <Grid item sm={5}>
                    </Grid>
                    <Grid item sm={2} md={12}>
                      {/* TODO get butterfly image */}
                      <img className={classes.butterflyGreyIcon} src="/images/home/square_wireframe.jpg" alt="Urban Sanctuary Logo"/>
                    </Grid>
                    <Grid item sm={5}>
                    </Grid>

                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                  <Grid container direction="column" className={classes.aboutUsContainer}>
                    <Grid item className={`${classes.fontBase} ${classes.aboutUsTitle}`}>
                      ABOUT US
                    </Grid>
                    <Grid item className={`${classes.fontBase} ${classes.aboutUsText}`}>
                      HCN and the Sanctuary Project are the ofspring of Vision for Humanity, a New Zealand charitable trust with 
                      aims to create a Global Family and a Successful Planet. Long term, HCN is intended to disperse content from
                      The Urban Sanctuary's health and wellbeing professionals, guides and workshops.
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Grid container direction="column" className={classes.metamorphicMediaContainer}>
                    <Grid item>
                      <div className={`${classes.fontBase} ${classes.metamorphicMediaTitle}`}>
                        METAMORPHIC MEDIA
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={`${classes.fontBase} ${classes.metamorphicMediaText}`}>
                        Elevating Global Consciousness through all forms of information and entertainment.
                        Visualise a world where the media induces mental / emotional well-bring and social cohesion.
                      </div>
                    </Grid>
                    <Grid item>
                      <div className={`${classes.fontBase} ${classes.metamorphicMediaCaption}`}>
                        Vision for Media, vision for Humanity
                      </div>
                    </Grid>
                    <Grid item>
                      {/* TODO get link for this button  */}
                      <RouterLink
                        className={classes.linkBase}
                        to="#"
                      >
                        <Button 
                        className={`${classes.fontBase} ${classes.buttonBase} ${classes.metamorphicMediaButton}`}
                        >
                          TAKE ME DEEPER
                        </Button>
                      </RouterLink>
                      
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <div className={classes.videoParentContainer}>
                <div className={classes.videoContainer}>
                  <span className={`${classes.fontBase} ${classes.videoContainerTitle}`}>OUR VOLUNTEER BASED HCN TEAM</span>
                  <video ref="vidRef" className={classes.videoVolunteers} controls={playingVolunteerVideo}>
                    <source src={volunteerVideoURL} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                  <IconButton 
                    className={playingVolunteerVideo? classes.hidden: classes.videoVolunteerPlayButton}
                    onClick={this.handleVolunteerVideoState}
                  >
                    <PlayCircleOutline className={classes.videoVolunteerPlayIcon} />
                  </IconButton>
                </div>
                <div className={`${classes.fontBase} ${classes.videoCaption}`}>
                  HCN is currently being established by a band of dedicated volunteers directed by the VFH founder
                  Kim Larking. Watch this brief video to see out team (video of volunteers and me talking about HCN).
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container className={classes.gridContainerPadding}>
            <Grid item xs={12} sm={12} md={9}>
              <Carousel direction="right" titlePosition="bottom" speed={8000}>  
                {slides}
              </Carousel>
            </Grid>
            <Grid item xs={12} sm={12} md={2}>
              <Grid container direction="column" className={classes.urbanSanctuaryContainer}>
                <Grid item>
                  {/* TODO get correct image */}
                  <img className={classes.urbanSanctuaryImage} src="/images/home/square_wireframe.jpg" alt="Urban Sanctuary Logo"/>
                </Grid>
                <Grid item>
                  {/* TODO change "to" attrubute to correct link  */}
                  <RouterLink
                    className={classes.linkBase}
                    to="#"
                  >
                    <Button
                      className={`${classes.fontBase} ${classes.buttonBase} ${classes.urbanSanctuaryButton}`}
                    >
                    VISIT NOW
                    </Button>
                  </RouterLink>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={1}>

            </Grid>
          </Grid>

          <Grid container className={`${classes.gridContainerPadding} ${classes.metawheelContainer}`}>
            <Grid item sm={1} md={5}>
              
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
              {/* TODO get correct image */}
              <img className={classes.metawheelImage} src="/images/home/square_wireframe.jpg" alt="Metawheel Graphic"/>
              <div className={`${classes.fontBase} ${classes.metawheelTitle}`}>
                TAKE THE METAWHEEL JOURNEY
              </div>
              <div className={`${classes.fontBase} ${classes.metawheelText}`}>
                Sanctuary Human Advancement Architecture
              </div>
            </Grid>
            <Grid item sm={1} md={1}>
              
            </Grid>
          </Grid>
        </PageWrapper>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));
