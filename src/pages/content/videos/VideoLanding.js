import React , { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Home from '../../home/Home'
import CardBox from './CardVideoBox'
import cardVideoData from './cardVideoData'

import PlayCircleOutlineIcon from './Icons/PlayCircleOutline';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class VideoLanding extends Component {
  render() {
    const { classes } = this.props
    const handleClick = (param) => {
      console.log('this is:', param)
    }
    return (
      <div className={classes.root}>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          {cardVideoData.map(card => (
            <Grid item xs={12} sm={6} md={3} key={cardVideoData.indexOf(card)}>
              <CardBox
                id={card.id}
                image={card.image}
                title={card.title}
                titleTop={card.titleTop}
                content={card.content}
                topbtntext={card.topbtntext}
                bottombtntext={card.bottombtntext}
                playcircleoutlineiconclicktext={card.playcircleoutlineiconclicktext}
                handleClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}


export default withStyles(styles, { withTheme: true }) (VideoLanding);



