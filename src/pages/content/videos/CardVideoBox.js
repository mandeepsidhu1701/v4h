import React, { Component } from 'react'
import { styled, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import PlayCircleOutlineIcon from './Icons/PlayCircleOutline.js';


import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  withTheme,
  Hidden
} from '@material-ui/core/'

const styles = theme => ({
  media: {
    position: 'relative',
    // paddingTop: '56.25%' // 16:9
    paddingTop: '80%',
    
  },
  title: {
    backgroundColor: 'black',
    opacity: 0.8,
    color: 'white',
    padding: '15px 40px',
    lineHeight: 2,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: 3
  },
  titleTop: {
    backgroundColor: 'black',
    opacity: 0.8,
    color: 'white',
    padding: '15px 40px',
    lineHeight: 0.10,
    fontSize: 7,
    fontWeight: 200,
    letterSpacing: 3,
    paddingLeft: '30%'
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20
  },
  buttonBox: {
    paddingTop: 20
  },
   
  PlayCircleOutlineIcon: {
    paddingTop: '0px',
    padding: '35px',
  },
})

/*const PlayCircleOutlineIconClick = withStyles({
  root: {
    position: 'absolute',
    right: 20,
    top: 50,
    color: 'white',
    fontSize: 9,
    fontWeight: 700,
    borderRadius: 3,
    //padding: '8px 10px 6px 10px',
    backgroundColor: '#5fd26e',
    '&:hover': {
      backgroundColor: '#5fd26e',
    }
  }
})(PlayCircleOutlineIcon)
*/
const TopButton = withStyles({
  root: {
    position: 'absolute',
    right: 20,
    top: 20,
    color: 'white',
    fontSize: 9,
    fontWeight: 700,
    borderRadius: 3,
    padding: '8px 10px 6px 10px',
    backgroundColor: '#5fd26e',
    '&:hover': {
      backgroundColor: '#5fd26e',
    }
  }
})(Button)


const BottomButton = withStyles({
  root: {
    border: 1,
    borderStyle: 'solid',
    borderColor: '#b2650c',
    borderRadius: 3,
    color: '#b2650c',
    fontSize: 9,
    padding: '4px 8px 2px 8px',
    '&:hover': {
      backgroundColor: 'white',
    }
  }
})(Button)


class CardVideoBox extends Component {
  render() {
    const { classes, id, image, title, titleTop, content,topbtntext, bottombtntext,playcircleoutlineiconclicktext ,handleClick } = this.props;
    return (
      <Card elevation={0} square={true}>
      <Typography className={classes.titleTop}>
            {titleTop}
      </Typography>

      <CardMedia className={classes.media} image={image}>
      <Typography align="center" className={classes.PlayCircleOutlineIcon}>
      <PlayCircleOutlineIcon onClick={() => handleClick(id)}>{playcircleoutlineiconclicktext}</PlayCircleOutlineIcon>
       </Typography> 
        <Typography>
            <TopButton onClick={() => handleClick(id)}>{topbtntext}</TopButton>
          </Typography>
  
        <Typography className={classes.title}>
            {title}
          </Typography>

         
        </CardMedia>
      {content === undefined ? 
        null :
        <CardContent> 
          <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
            {content}
          </Typography>
          {bottombtntext === undefined ? 
            null : 
            <Typography align="center" className={classes.buttonBox}>
              <BottomButton onClick={() => handleClick(id)}>{bottombtntext}</BottomButton>
            </Typography>
          }
        </CardContent>
      }
    </Card>
    )
  }
}

export default withStyles(styles)(CardVideoBox)