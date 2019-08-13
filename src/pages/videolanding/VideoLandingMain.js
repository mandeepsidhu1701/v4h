import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from '../home/Home'
import VideoLanding from '../videolanding/VideoLanding'
import CardBox from '../../components/CardVideoBox'
import cardData from './cardVideoData'

import Cover from 'react-video-cover';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

const style = {
 // width: '100vw',
 // height: '100vh',
  //position: 'absolute',
  //top: 0,
 // left: 0,
  //zIndex: -1,
  overflow: 'hidden',
  
};



class VideoLandingMain extends Component {

      render() {
        
        const videoOptions = {
          src: '/images/SampleVideo_1280x720_1mb.mp4',
          autoPlay: true,
          muted: true,
          loop: true,
        };
    
        return (
          
            <div style={style}> 
              <Home /> 
             
              <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          {cardData.map(card => (
            <Grid item xs={12} sm={6} md={3} key={cardData.indexOf(card)}>
              <CardBox
                id={card.id}
                image={card.image}
                title={card.title}
                titleTop={card.titleTop}
               
              />
            </Grid>
          ))}
        </Grid>

        <Cover
                videoOptions={videoOptions} 
                remeasureOnWindowResize
          getResizeNotifier={resizeNotifier => {
            this.setState({
              resizeNotifier,
            });
          }}
              />
            </div>          
        );    
  }
}


export default withStyles(styles, { withTheme: true }) (VideoLandingMain);
