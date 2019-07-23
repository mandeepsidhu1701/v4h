import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal'
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NavBar from '../../components/NavBar';

import {
  APP_TITLE,
  SECOND_GENOME
} from '../../common/i18n';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

class Home extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />          
        <p>A dream you dream alone is only a dream. A dream you dream together is reality. </p>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
