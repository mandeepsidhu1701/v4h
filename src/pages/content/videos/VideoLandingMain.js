import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VideoLanding from './VideoLanding'
import CardBox from './CardVideoBox'
import cardData from './cardVideoData'

import videoSample from './SampleVideo_1280x720_1mb.mp4'
import bG from './videogrid1.png'

import Cover from 'react-video-cover';

const styles = theme => ({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1,
  root: {
    flexGrow: 1
  }
})

const style = {
  overflow: 'hidden',
  
};



class VideoLandingMain extends Component {
  render() {
    const videoOptions = {
      src: videoSample,
      autoPlay: true,
      muted: true,
      loop: true,
    };

    return (
    <div style={style}> 
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
      {cardData.map(card => (
        <Grid item xs={12} sm={6} md={3} key={cardData.indexOf(card)}>
          <CardBox
            id={card.id}
            image={bG}
            title={card.title}
            titleTop={card.titleTop}
          />
        </Grid>
      ))}
    </Grid>
  </div>          
    );    
  }
}


export default withStyles(styles, { withTheme: true }) (VideoLandingMain);
