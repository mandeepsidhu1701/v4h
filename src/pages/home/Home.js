import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AnimatedText from '../../components/AnimatedText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textButton:{
    fontFamily: 'Calibri',
    '&:hover': {
      backgroundColor:'#ffffff',
      paddingtop:'10px'
    },
  }
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
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Button className={classes.textButton}>
                INTRO
              </Button>
              <Button className={classes.textButton}>
                CONTENT
          </Button>
              <Button>
                SECOND HCN Genome
          </Button>
              <Button className={classes.textButton}>
                ORGANIZE
          </Button>
              <Button className={classes.textButton}>
                CONNECT
          </Button>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
