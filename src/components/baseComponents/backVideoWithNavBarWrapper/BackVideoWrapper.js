import React, {Component, Fragment} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = {
  parallaxVideoFigure: {
    margin: 0,
    position: 'relative'
  },
  parallaxVideoContainer: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%'
  },
  backVideoWrapper: {
    flexGrow: 1,
    position: 'fixed',
    bottom: 0,
    right: 0,
    height: 'auto',
    width: 'auto',
    minHeight: '100%',
    minWidth: '100%',
    zIndex: '-9999'
  }
};

class BackVideoWrapper extends Component {
  render() {
    const {source, classes, children} = this.props;

    return (
      <Fragment>
        <div className={classes.backVideoWrapper}>
          <figure className={classes.parallaxVideoFigure}>
            <video
              loop="loop"
              muted="muted"
              autoPlay="autoplay"
              className={classes.parallaxVideoContainer}
            >
              <source src={source} />
            </video>
          </figure>
        </div>
        {children}
      </Fragment>
    );
  }
}

BackVideoWrapper.propTypes = {
  source: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.array
  ]).isRequired
};

export default withStyles(styles)(BackVideoWrapper);