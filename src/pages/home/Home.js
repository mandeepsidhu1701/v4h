import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal'
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

const styles = theme => ({
});

class Home extends React.Component {
  state = {};

  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <span>Home Page</span>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
