import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import * as Animation from './animation';
//import {relative} from 'path';
import PropTypes from 'prop-types';
import {styles} from './Styles';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as sphereActions from "../../store/sphere/actions";

/***
 * Creates an animated, swirling particle sphere.
 *
 *
 */
class Sphere extends Component {
  static propTypes = {
    /** width of Sphere */
    width: PropTypes.number,
    /** height of Sphere */
    height: PropTypes.number,
    /** radius of Sphere */
    sphereRad: PropTypes.number,
    /** Colour of sphere. Must be value of: 1, Green; 2, Blue; 3, Pink; 4, Yellow */
    type: PropTypes.number,
    /** additional CSS class(es). Either a string (class name) or an object (material-ui style class). */
    variant: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  };

  canvasId = '';
  overlayImages = [
    '/images/personHealth.png',
    '/images/personProsperity.png',
    '/images/personInspiration.png',
    '/images/personJoy.png'
  ];
  sphereColors = [
    {r: 101, g: 187, b: 25},
    {r: 79, g: 145, b: 233},
    {r: 251, g: 2, b: 254},
    {r: 254, g: 197, b: 3}
  ];

  constructor(props) {
    super(props);
    this.state = {};

    this.canvasId = this.props.id !== undefined ? this.props.id : 'sphere-' + this.getRandomInt(99999);
  }

  componentDidMount() {
    let type = this.props.type !== undefined ? this.props.type : 0;
    this.timerId = Animation.canvasApp(this.canvasId, this.props.sphereRad, this.sphereColors[type]);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    const {classes} = this.props;
    let width = this.props.width !== undefined ? this.props.width : 70;
    let height = this.props.width !== undefined ? this.props.height : 70;
    let type = this.props.type !== undefined ? this.props.type : 0;
    let variant = this.props.variant !== undefined ? this.props.variant : null;
    return (
      <div className={`${classes.container} ${variant}`}>
        <div>
          <canvas id={this.canvasId} width={width} height={height} />
        </div>
        <div className={classes.overlay}>
          <img
            src={this.overlayImages[type]}
            width={width}
            height={height}
            className="image"
            alt="Animation, Rotating Particle Sphere"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Sphere));
