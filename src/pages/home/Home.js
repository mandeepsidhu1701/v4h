import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import {Landing} from '@/components/layout/Landing';
import styles from './HomeStyles';
import SectionDescription from './Sections/SectionDescription'

//TODO: what to do about spheres, correct size and position for small real-estate screens / mobile?

//TODO: test all links: sanctuary store, connect me, take me deeper, metawheel, fix links that are not working.

//TODO: update second genome logo to on mobile always show authlinks

//TODO: test interactions on different screen sizes and in mobile and desktop.

class Home extends React.Component {
  state = {
    landingShow: true,
    onAnimationEnd: false
  };

  handleHideContent = () => {
    this.setState({
      landingShow: false
    });
  };

  onAnimationEnd = () => {
    this.setState({
      onAnimationEnd: true
    });
  };
  render() {
    return (
      <React.Fragment>
        {!this.state.onAnimationEnd ? (
          <Landing
            landingShow={this.state.landingShow}
            hideContent={this.handleHideContent}
            onAnimationEnd={this.onAnimationEnd}
          />
        ) : null}
        {this.state.landingShow === true ? 
          null : 
          <SectionDescription></SectionDescription>}
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Home));
