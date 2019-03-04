import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal';
import { hashHistory } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AnimatedText from '../../components/AnimatedText';

import {
  APP_TITLE,
  SECOND_GENOME
} from '../../common/i18n';

const appTitleDelays = [400, 400, 466.667, 66.6667, 266.667, 133.333, 0, 400, 466.667, 66.6667, 266.667, 133.333, 166.667500, 400, 533.333, 300, 666.667, 500, 566.667, 333.333, 400, 400, 466.667, 66.6667, 0, 266.667, 133.333, 166.667, 500, 400, 533.333, 300];

const styles = theme => ({
  card: {
    width: '100%',
    height: '100%'
  },
  genome: {
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '6%',
    left: '50%',
    zIndex: '1',
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: '26px',
    color: '#1D515F',
    opacity: '0.35'
  },
  siteName: {
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '51%',
    left: '50%',
    zIndex: '1',
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: '36px',
    fontWeight: '700',
    lineHeight: '1',
    textAlign: 'center',
    color: "white"
  },
  media: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: '0',
    animation: '7s ease-out 0s 1 scaleAnimation'
  },
  actions: {
    display: 'block',
    textAlign: "center",
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0'
  },
  "@keyframes scaleAnimation": {
    from: { transform: 'scale(1.2)' },
    to: { transform: 'scale(1)' },
  },
});

class Landing extends React.Component {
  state = {};

  constructor(props){
    super(props);
  }

  handleScrollButtonClick = () => {
    hashHistory.push('/home');
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <span className={classes.genome}>{intl.get(SECOND_GENOME)}</span>
        <div className={classes.siteName}>
          <AnimatedText text={intl.get(APP_TITLE)} delays={appTitleDelays}/>
        </div>
        <CardMedia
          className={classes.media}
          image="/images/matt-hardy-562566-unsplash@2x.png"
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Scroll" onClick={this.handleScrollButtonClick}>
            <img src='/images/scroll-icon-png_02-.png' width={24} height={32.6} alt='scroll' />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
