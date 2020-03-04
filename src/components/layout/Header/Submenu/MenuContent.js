import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles, Popper, Fade, Grid, Card, CardMedia, CardContent, Typography} from '@material-ui/core';

import globeIcon from '../../../../assets/images/icons/globe-02.png';
import sanctuaryIcon from '../../../../assets/images/icons/sanctuary-03.png';

const styles = (theme) => ({
  popper: {
    [theme.breakpoints.down('sm')]: {
      height: 'calc(100% - 100px)'
    },
    width: 'calc(100% + 5px)',
    borderTop: '0px solid #c0c0c0',
    zIndex: 85
  },
  grid: {
    padding: '0 20px 0 26px',
    backgroundColor: '#ffffff'
  },
  card: {
    '&:hover': {
      '& > div:last-child': {
        borderTop: 'solid #000000 2px'
      },
      '& p': {
        color: 'black',
        fontWeight: '700 !important'
      }
    }
  },
  media: {
    // paddingTop: '56.25%', // 16:9
    paddingTop: '66.666%' // 3:2
  },
  icons: {
    float: 'right',
    width: 20,
    height: 20,
    '&:first-child': {
      marginLeft: 6
    }
  },
  content: {
    marginTop: 10,
    padding: '16px 0'
  },
  borderR: {border: 'solid 1px red'},
  borderB: {border: 'solid 1px blue'}
});

class MenuContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClose = (e) => {
    if (document.getElementById('popper') !== null && !document.getElementById('popper').contains(e.target)) {
      this.setState({
        open: false,
        anchorEl: null
      });
      this.props.submenuClose();
    }
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClose, 'once');
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClose, 'once');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.props.submenuOpen) {
      this.setState({
        open: this.props.submenuOpen,
        anchorEl: this.props.submenuAnchorEl
      });
    }
  }

  handleClick = (url) => (e) => {
    e.preventDefault();
    this.props.history.push(url);
  };

  handleLinkClick = (url) => () => {
    this.props.history.push(url);
    this.setState({
      open: false,
      anchorEl: null
    });
    this.props.submenuClose();
  };

  render() {
    const {classes, submenuData, iconShow} = this.props;
    const size = iconShow ? 9 : 12;

    return (
      <Popper
        id="popper"
        className={classes.popper}
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        transition
      >
        {({TransitionProps}) => (
          <Fade {...TransitionProps} timeout={500}>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start" className={classes.grid}>
              {submenuData !== null &&
                submenuData.map((menu) => (
                  <Grid item xs={6} sm={3} md={3} key={submenuData.indexOf(menu)} style={{padding: '32px 20px 0px'}}>
                    <div onClick={this.handleLinkClick(menu.link)} style={{textDecoration: 'none'}}>
                      <Card elevation={0} square={true} className={classes.card}>
                        <CardMedia className={classes.media} image={menu.image} />
                        <CardContent className={classes.content}>
                          <Grid container>
                            <Grid item xs={size}>
                              <Typography style={{cursor: 'pointer'}}>{menu.title}</Typography>
                            </Grid>
                            {iconShow ? (
                              <Grid item xs={3}>
                                <CardMedia
                                  className={classes.icons}
                                  image={globeIcon}
                                  onClick={this.handleClick(menu.globeLink)}
                                />
                                <CardMedia
                                  className={classes.icons}
                                  image={sanctuaryIcon}
                                  onClick={this.handleClick(menu.sanctuaryLink)}
                                />
                              </Grid>
                            ) : null}
                          </Grid>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                ))}
            </Grid>
          </Fade>
        )}
      </Popper>
    );
  }
}

MenuContent.defaultProps = {
  iconShow: true
};

export default withStyles(styles)(withRouter(MenuContent));
