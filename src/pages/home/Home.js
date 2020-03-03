import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';

import {Landing} from '../../components/layout/Landing';
import styles from './HomeStyles';

//TODO: what to do about spheres, correct size and position for small real-estate screens / mobile?

//TODO: test all links: sanctuary store, connect me, take me deeper, metawheel, fix links that are not working.

//TODO: update second genome logo to on mobile always show authlinks

//TODO: test interactions on different screen sizes and in mobile and desktop.

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Landing />
        <div style={{background:'rgba(0,0,0,0.1)',height:'200vh'}}></div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Home));
