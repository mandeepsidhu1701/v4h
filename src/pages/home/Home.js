import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import AnimatedText from '../../components/common/ui/AnimatedText';
import PageWrapper from '../../components/common/BackVideoWithAppBarWrapper';



const appTitleDelays = [400, 400, 466.667, 66.6667, 266.667, 133.333, 0, 400, 466.667, 66.6667, 266.667, 133.333, 166.667500, 400, 533.333, 300, 666.667, 500, 566.667, 333.333, 400, 400, 466.667, 66.6667, 0, 266.667, 133.333, 166.667, 500, 400, 533.333, 300];

const styles = theme => ({
  landingRoot: {
    backgroundColor: "#C0D2DE",
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 90,
    width: '100%',
    height: '100%',
  },
  landingImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: 90,
    animation: '5s ease-out 0s 1 scaleAnimation'
  },
  landingScrollUp: {
    animation: '0.5s ease-out 0s 1 moveLandingUp',
    top: '-100%',
  },
  genome: {
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '6%',
    left: '50%',
    zIndex: 91,
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: '26px',
    color: '#1D515F',
    opacity: '0.35'
  },
  siteName: {
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '51%',
    left: '50%',
    zIndex: 91,
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '1',
    color: "white"
  },
  closeIconButton: {
    zIndex: 91,
    display: 'block',
    textAlign: "center",
    position: 'fixed',
    bottom: '32px',
    left: '0',
    right: '0'
  },
  hidden: {
    display: 'none',
  },
  "@keyframes scaleAnimation": {
    from: { transform: 'scale(1.2)' },
    to: { transform: 'scale(1)' }
  },
  "@keyframes moveLandingUp": {
    from: { top: '0%' },
    to: { top: '-100%' }
  }
});

const landingState = {
  SHOW: "SHOW",
  SCROLL: "SCROLL",
  HIDE: "HIDE"
}

class Home extends React.Component {

  state = {
    landing: landingState.SHOW,
  }

  handleScrollLanding = () => {
    this.setState({landing: landingState.SCROLL});
    setTimeout(() => {this.handleHideLanding()}, 1000);
  }

  handleHideLanding = () => {
    this.setState({landing: landingState.HIDE});
  }

  render() {
    const { landing } = this.state;
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

    return (
      <React.Fragment>
        <div className={rootClass}>
          <img 
            src="/images/matt-hardy-562566-unsplash@2x.png" 
            alt="Background asthetics"
            className={classes.landingImage}
          />

        <span className={classes.genome}>{"Second Genome"}</span>

        <div className={classes.siteName}>
          <AnimatedText text={"Higher Consciousness Network"} delays={appTitleDelays}/>
        </div>

          <div className={classes.closeIconButton}>
            <IconButton aria-label="Close Landing Drawer" onClick={() => {this.handleScrollLanding()}}>
              <img src='/images/scroll-icon-png_02-.png' width={24} height={32} alt='Close Landing Drawer' />
            </IconButton>
          </div>
        </div>
        <PageWrapper>        
          <p>A dream you dream alone is only a dream. A dream you dream together is reality. </p>
        </PageWrapper>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
