import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import ParallaxVideo from './BackVideoWrapper';

//import Navbar from './NavBar';

const styles = theme => ({

});

class BackVideoWithAppBarWrapper extends Component {

  render() {
    const variant = this.props.className;

    const { source, children } = this.props;

    return (
        <ParallaxVideo source={source} variant={variant} >
          {children}
        </ParallaxVideo>
    );
  }
}

BackVideoWithAppBarWrapper.propTypes = {
  source: PropTypes.string,
}

export default withStyles(styles)(BackVideoWithAppBarWrapper);