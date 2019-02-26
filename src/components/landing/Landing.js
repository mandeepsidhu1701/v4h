import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  card: {
    width: '100%',
    height: '100%'
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

  handleScrollButtonClick = () => {
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/matt-hardy-562566-unsplash@2x.png"
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Share">
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
