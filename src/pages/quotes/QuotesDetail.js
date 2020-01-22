import React , { Component } from 'react';
import { Card, CardMedia, Typography, Grid } from '@material-ui/core';

const style = {
  //width: '1920px',
  //height: '1224px',
  //width: '3870px',
  //height: '2580px',
  //position: 'absolute',
  //top: 0,
  //left: 0,
  //zIndex: -1,
  overflow: 'hidden',
  //backgroundImage : 'url(/images/pics.jpg)'
  //backgroundImage : 'url(/images/matt-hardy-562566-unsplash@2x.png)',
  backgroundPosition : 'center',
  backgroundRepeat : 'no-repeat',
  backgroundSize : '100% auto, cover',
  backgroundColor: 'rgba(255, 255, 255, 1)',

  // border : '0 0 0 5',
  // borderStyle : 'solid none none none',
  // borderColor : 'rgb(230, 230, 230)',
};

const subtitleStyle = {
  fontSize : '1.2rem', 
  fontWeight : '600', 
  textAlign : 'center', 
  lineHeight : '4', 
  letterSpacing : '1px',
};

class QuotesDetail extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div style={style}>
        <Grid container direction="row" justify="flex-start" border="0">
          {/** picture on the left */}
          <Grid item xs={4} md={5} lg={7} xl={9}>
            <Card square={true} border="0">
                <CardMedia alt='picture' style={{paddingTop : '60%'}} image={'/images/QuotesDetail.png'}></CardMedia>
            </Card>
          </Grid>
          <Grid item xs={8} md={7} lg={5} xl={3}>
            <Grid container direction='column'>
              <Grid item border={5} style={{borderStyle : 'solid none solid none', borderColor : 'rgb(230, 230, 230)', border : '4', display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
                <Grid container direction="row" align='center' lineHeight="8">
                  <Grid item xs={4} style={{display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
                    <img src='/images/back_arrow.svg'/>
                  </Grid>
                  <Grid item xs={4}>
                    <img src='/images/flipping_icon.jpg'/>
                    <div style={{color : "#66b3ff", fontWeight : '700'}}>Wisdom & Success</div>
                  </Grid>
                  <Grid item xs={4} style={{display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
                    <img src='/images/forward_arrow_small.svg'/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{display : 'flex', flexDirection : 'column', justifyContent : 'center'}}>
              <Typography component='div'>
                <div style={subtitleStyle}>Quote 12</div>
                <div style={{textAlign : 'center'}} dangerouslySetInnerHTML={{ __html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit'}}></div>
                <div style={{fontSize : '1.1rem', textAlign : 'center', lineHeight : '2', color : '#b5b3b3', marginTop : '15px'}}>AUTHOR</div>
                <div style={{fontSize : '1.1rem', textAlign : 'center', lineHeight : '2', color : '#b5b3b3'}}>Photo Credit Details</div>
                <div style={subtitleStyle}>Insight</div>
                <div style={{textAlign : 'center'}} dangerouslySetInnerHTML={{ __html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit'}}></div>
                <div style={subtitleStyle}>Affirmation</div>
                <div style={{textAlign : 'center'}} dangerouslySetInnerHTML={{ __html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit'}}></div>
                <div style={subtitleStyle}>Instagram</div>
                <div style={{display : 'flex', justifyContent : 'space-between', flexWrap : 'nowrap', margin : '0 80px'}}>
                  <img src='/images/flipping_icon.jpg'/>
                  <img src='/images/flipping_icon.jpg'/>
                  <img src='/images/flipping_icon.jpg'/>
                  <img src='/images/flipping_icon.jpg'/>
                  <img src='/images/flipping_icon.jpg'/>
                </div>
              </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>               
    );    
  }
}


export default QuotesDetail;
