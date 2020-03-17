import React from 'react';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import {withStyles, IconButton, Grid, Button} from '@material-ui/core';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';

import {Carousel, CarouselSlide} from '../../../components/ui/Carousel';
import ButterflyLarge from '../../../assets/images/icons/butterflyLarge.png';
import UrbanSanctuary from '../../../assets/images/icons/urbanSanctuary.png';
import Metawheel from '../../../assets/images/content/landing/metawheel.png';
import data from '../../../data/homeData';
import styles from '../HomeStyles';

function SectionDescription(props) {
  const {classes} = props;

  const [playVideo, setPlayVideo] = React.useState(false);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  const slides = data.corePrincipals.map((principle, i) => {
    return (
      <CarouselSlide key={principle.name} imageURL={principle.image} title={principle.name} text={principle.text} />
    );
  });

  return (
    <div style={{background: 'url(/images/matt-hardy-562566-unsplash@2x.png)'}}>
      <Grid container className={classes.gridContainerPadding}>
        <Grid item xs={1} sm={2}/>
        <Grid item xs={10} sm={8}>
          <p className={classes.inspireQuote}>
            {data.text.inspireQuote}
          </p>
  <p className={classes.inspireQuoteCitation}>{data.text.inspireQuoteAuther}</p>
        </Grid>
        <Grid item xs={1} sm={2} md={3} />
      </Grid>
      <Grid container className={classes.gridContainerPadding}>
        <Grid item xs={12} sm={12} md={4}>
          <p className={`${classes.paragraphTextSmall} ${classes.siteDescriptionContainer}`}>
            {data.text.siteDescription}
          </p>
          <p className={classes.paragraphTextSmall}>
            {data.text.siteDescriptionSecondPara}
            <RouterLink to="#">Connect Me!</RouterLink>
          </p>
        </Grid>
        <Grid item md={8} />
      </Grid>
      <Grid container className={classes.gridContainerPadding}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container>
            <Grid item xs={12} sm={12} md={7}>
              <Grid container>
                <Grid item sm={5} />
                <Grid item sm={2} md={12}>
                  {/* TODO get butterfly image */}
                  <img
                    className={classes.butterflyGreyIcon}
                    src={ButterflyLarge}
                    alt="Urban Sanctuary Logo"
                  />
                </Grid>
                <Grid item sm={5} />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <Grid container direction="column" className={classes.aboutUsContainer}>
                <Grid item className={`${classes.fontBase} ${classes.aboutUsTitle}`}>
                  {data.text.aboutUs}
                </Grid>
                <Grid item className={`${classes.fontBase} ${classes.aboutUsText}`}>
                  {data.text.aboutUsContent}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container direction="column" className={classes.metamorphicMediaContainer}>
                <Grid item>
  <div className={`${classes.fontBase} ${classes.metamorphicMediaTitle}`}>{data.text.metamorphicTitle}</div>
                </Grid>
                <Grid item>
                  <div className={`${classes.fontBase} ${classes.metamorphicMediaText}`}>
                    {data.text.metamorphicMediaText}
                  </div>
                </Grid>
                <Grid item>
                  <div className={`${classes.fontBase} ${classes.metamorphicMediaCaption}`}>
                    {data.text.metamorphicCaption}
                  </div>
                </Grid>
                <Grid item>
                  {/* TODO get link for this button  */}
                  <RouterLink className={classes.linkBase} to="#">
                    <Button className={`${classes.fontBase} ${classes.buttonBase} ${classes.metamorphicMediaButton}`}>
                      {data.text.metamorphicButton}
                    </Button>
                  </RouterLink>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className={classes.videoParentContainer}>
            <div className={classes.videoContainer}>
  <span className={`${classes.fontBase} ${classes.videoContainerTitle}`}>{data.text.videoTitle}</span>
              <video className={classes.videoVolunteers} controls poster={data.volunteerVideoPoster}>
                <source src={data.volunteerVideoURL} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <IconButton
                className={playVideo ? classes.hidden : classes.videoVolunteerPlayButton}
                onClick={handlePlayVideo}
              >
                <PlayCircleOutline className={classes.videoVolunteerPlayIcon} />
              </IconButton>
            </div>
            <div className={`${classes.fontBase} ${classes.videoCaption}`}>
              {data.text.videoCaption}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className={classes.gridContainerPadding}>
        <Grid item xs={12} sm={12} md={9}>
          <Carousel direction="right" titlePosition="bottom" speed={8000}>
            {slides}
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
          <Grid container direction="column" className={classes.urbanSanctuaryContainer}>
            <Grid item>
              {/* TODO get correct image */}
              <img
                className={classes.urbanSanctuaryImage}
                src={UrbanSanctuary}
                alt="Urban Sanctuary Logo"
              />
            </Grid>
            <Grid item>
              {/* TODO change "to" attrubute to correct link  */}
              <RouterLink className={classes.linkBase} to="#">
                <Button className={`${classes.fontBase} ${classes.buttonBase} ${classes.urbanSanctuaryButton}`}>
                  {data.text.urbanButton}
                </Button>
              </RouterLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} />
      </Grid>

      <Grid container className={`${classes.gridContainerPadding} ${classes.metawheelContainer}`}>
        <Grid item sm={1} md={5} />
        <Grid item xs={12} sm={10} md={6}>
          {/* TODO get correct image */}
          <img className={classes.metawheelImage} src={Metawheel} alt="Metawheel Graphic" />
  <div className={`${classes.fontBase} ${classes.metawheelTitle}`}>{data.text.metawheelTitle}</div>
  <div className={`${classes.fontBase} ${classes.metawheelText}`}>{data.text.metawheelText}</div>
        </Grid>
        <Grid item sm={1} md={1} />
      </Grid>
    </div>
  );
}

export default withRouter(withStyles(styles)(SectionDescription));
