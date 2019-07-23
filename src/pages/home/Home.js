import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal'
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NavBar from '../../components/NavBar';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import {
  APP_TITLE,
  SECOND_GENOME
} from '../../common/i18n';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
});

class Home extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <NavBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
