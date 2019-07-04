import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {withStyles} from '@material-ui/core';
import * as Animation from './animation';
import { relative } from 'path';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as sphereActions from "../../store/sphere/actions";

const styles = theme => ({
  overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      transition: '.5s ease',
      "&:hover" : {
        opacity: 1,
      }
  },
  container: {
    position: 'relative',
  },
});

class Sphere extends Component {
    
    canvasId = '';
    overlayImages = [
      "/images/personHealth.png",
      "/images/personProsperity.png",
      "/images/personInspiration.png",
      "/images/personJoy.png",
    ];
    sphereColors = [
      {r:101, g:187, b:25},
      {r:79, g:145, b:233},
      {r:251, g:2, b:254},
      {r:254, g:197, b:3},
    ];

    constructor(props) {
        super(props);
        this.state = {};

        this.canvasId = this.props.id !== undefined ? this.props.id : ("sphere-"+this.getRandomInt(99999));
    }

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    componentDidMount() {
      let type = this.props.type != undefined ? this.props.type : 0;
      Animation.canvasApp(this.canvasId, this.props.sphereRad, this.sphereColors[type]);
    }

    render() {
      let {classes} = this.props;
      let width = this.props.width != undefined ? this.props.width : 70;
      let height = this.props.width != undefined ? this.props.height : 70;
      let type = this.props.type != undefined ? this.props.type : 0;
      return (
      <div className={classes.container}>
          <div> 
              <canvas id={this.canvasId} width={width} height={height}></canvas>
          </div>
          <div className={classes.overlay}>
              <img src={this.overlayImages[type]}  width={width} height={height} class="image"/>
          </div>
      </div>);
    }
  }

export default withRouter(withStyles(styles)(Sphere));