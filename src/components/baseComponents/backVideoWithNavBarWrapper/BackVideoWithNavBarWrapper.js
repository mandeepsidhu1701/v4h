import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import ParallaxVideo from './BackVideoWrapper';

import NavigationBar from '../navigationBar/NavigationBar';

const styles = (theme) => ({});

class BackVideoWithNavBarWrapper extends Component {
  render() {
    const variant = this.props.className;

    const {source, children} = this.props;

    return (
      <ParallaxVideo source={source} variant={variant}>
        <NavigationBar />
        {children}
      </ParallaxVideo>
    );
  }
}

BackVideoWithNavBarWrapper.propTypes = {
  source: PropTypes.string
};

export default withStyles(styles)(BackVideoWithNavBarWrapper);

