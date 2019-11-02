import React, { Component } from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GradeIcon from '@material-ui/icons/Grade'
import PrintIcon from '@material-ui/icons/Print'
import ShareIcon from '@material-ui/icons/Share'
import { green, purple } from '@material-ui/core/colors';
import PageWrapper from '../../components/common/BackVideoWithAppBarWrapper';
import Icon from '../../components/common/icon/Icon'
import { func } from 'prop-types';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    fontSize: 14,
    width: '84%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    margin: 5,
    width: 100,
    height: 100
  },
  square_avatar: {
    width: 70,
    height: 70,
    borderRadius: 0
  },
  icon: {
    position: 'relative',
    marginRight: 1,
  },
  iconText: {
    marginRight: 15
  },
  firstLetter: {
    lineHeight: '2em',
    '&::first-letter': {
      '-webkit-initial-letter': '4 1',
      'initial-letter': '4 1',
      color: '#c69c6d',
      float: 'left',
      fontSize: '1.8em',
      margin: '.5em .7em'
    }
  },
  floatClear: {
    clear: 'both'
  },
  floatRight: {
    float: 'right !important'
  },
  floatLeft: {
    float: 'left !important'
  },
  box: {
    border: '1px solid #c0c0c0',
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 1,
    padding: 10,
    width: 240,
    textTransform: 'uppercase'
  },
  py: {
    paddingTop: '3.5rem',
    paddingBottom: '3.5rem'
  },
  py_2: {
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  ls_1: {
    letterSpacing: 1
  }
})

const IconButton = withStyles(theme => ({
  root: {
    color: '#c0c0c0',
    fontSize: 8,
    border: '1px solid #c0c0c0',
    padding: '1px 1px',
    margin: '0 4px',
    minWidth: 54,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    }
  }
}))(Button);

const SubmitButton = withStyles(theme => ({
  root: {
    fontSize: 10,
    padding: '10px 30px',
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    }
  }
}))(Button);

const CommentInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#eceff1',
    fontSize: 14,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    }
  }
}))(InputBase);

class ArticlesContent extends Component {
  constructor(props) {
    super(props);
    this.state = { category: "" };
  }

  render() {
    const { classes } = this.props;
    const handleChange = event => {
      this.setState({category: event.target.value});
    };
    return (
      <PageWrapper>
        <Container maxWidth="lg">
          <Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{marginTop: '3rem'}}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4">
                GREAT HERBS FOR GREAT JOINTS
              </Typography>
              <Typography variant="caption" display="block" paragraph>
                <Icon className={classes.icon} style={{ fontSize: 20, top: 8 }} name="wall-clock" htmlColor="#575757" />
                <span className={classes.iconText}>20. June. 2017</span>
                <GradeIcon className={classes.icon} style={{fontSize: 20, top: 5}} />
                <span className={classes.iconText}>Virality & Longevity</span>
                <GradeIcon className={classes.icon} style={{fontSize: 20, top: 5}} />
                <span className={classes.iconText}>ADD TO TREASURE BOX</span>
                <PrintIcon className={classes.icon} style={{fontSize: 20, top: 5}} />
                <span className={classes.iconText}>PRINT</span>
              </Typography>
              <Typography gutterBottom>
                <img src="/images/article/image01.png" width="100%"></img>
              </Typography>
              <Typography variant="caption" display="block" paragraph>
                <div className={classes.floatLeft}>
                  <Icon className={classes.icon} style={{ fontSize: 20, top: 8 }} name="thumb-up" htmlColor="#575757" />
                  <span className={classes.iconText}>120</span>
                  <Icon className={classes.icon} style={{ fontSize: 23, top: 11 }} name="favorite-o" />
                  <span className={classes.iconText}>609</span>
                  <Icon className={classes.icon} style={{ fontSize: 23, top: 11 }} name="comment" />
                  <span className={classes.iconText}>120</span>
                  <ShareIcon className={classes.icon} style={{fontSize: 20, top: 5}} />
                  <span className={classes.iconText}>SHARE</span>
                </div>
                <div className={classes.floatRight}>
                  <Icon className={classes.icon} style={{ fontSize: 20, top: 4 }} name="tag-cord" htmlColor="#575757" />
                  <IconButton>HERBS</IconButton>
                  <IconButton>SUCCESS</IconButton>
                  <IconButton>HEALTH</IconButton>
                </div>
              </Typography>
              <Typography className={`${classes.firstLetter} ${classes.floatClear}`} style={{paddingTop: 15}} variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eget gravida cum sociis natoque penatibus et magnis. Rhoncus est pellentesque elit ullamcorper dignissim cras. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Erat imperdiet sed euismod nisi. Nisi est sit amet facilisis magna etiam tempor orci eu. Sed elementum tempus egestas sed. Lectus nulla at volutpat diam ut. Arcu vitae elementum curabitur vitae nunc sed. Nibh mauris cursus mattis molestie a iaculis at. Velit scelerisque in dictum non consectetur a erat nam at. Pretium vulputate sapien nec sagittis aliquam.
                <br/><br/>
                Condimentum lacinia quis vel eros donec ac odio tempor orci. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Ullamcorper sit amet risus nullam eget. Id nibh tortor id aliquet lectus proin. Leo a diam sollicitudin tempor id eu. Adipiscing bibendum est ultricies integer quis. Amet porttitor eget dolor morbi non arcu. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Arcu vitae elementum curabitur vitae. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Etiam non quam lacus suspendisse faucibus interdum. Aenean pharetra magna ac placerat vestibulum. Dui vivamus arcu felis bibendum ut tristique et. Sed arcu non odio euismod lacinia at quis risus sed. Nunc sed velit dignissim sodales ut eu. Dapibus ultrices in iaculis nunc sed. Eget aliquet nibh praesent tristique magna sit amet. Mi sit amet mauris commodo quis imperdiet massa. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Ut aliquam purus sit amet.
                <br/><br/>
                Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Eu sem integer vitae justo. Mauris augue neque gravida in fermentum et sollicitudin. Viverra justo nec ultrices dui sapien. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Tempor orci dapibus ultrices in iaculis. Et sollicitudin ac orci phasellus egestas. Tellus cras adipiscing enim eu turpis. Enim sed faucibus turpis in eu. In massa tempor nec feugiat. Vitae turpis massa sed elementum tempus egestas sed. Pellentesque habitant morbi tristique senectus. Ac tortor vitae purus faucibus ornare. Tincidunt praesent semper feugiat nibh sed. Faucibus scelerisque eleifend donec pretium.
                <br/><br/>
                In hac habitasse platea dictumst. Sed augue lacus viverra vitae congue eu consequat ac. Proin sed libero enim sed faucibus. Semper auctor neque vitae tempus quam. Donec massa sapien faucibus et. Vestibulum lectus mauris ultrices eros. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Duis convallis convallis tellus id interdum velit laoreet id. Libero id faucibus nisl tincidunt eget. Feugiat pretium nibh ipsum consequat nisl. In hendrerit gravida rutrum quisque non tellus orci ac.
                <br/><br/>
                <GridList cellHeight={240} spacing={40} className={classes.gridList} cols={2}>
                  <GridListTile>
                    <img alt="" src="/images/avatar/test.png" />
                  </GridListTile>
                  <GridListTile>
                    <img alt="" src="/images/avatar/test.png" />
                  </GridListTile>
                </GridList>
                <br/>
                Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Ultricies lacus sed turpis tincidunt id aliquet risus. Nibh cras pulvinar mattis nunc sed blandit. At in tellus integer feugiat scelerisque varius morbi enim nunc. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Lobortis elementum nibh tellus molestie nunc non blandit. Quis viverra nibh cras pulvinar. Accumsan in nisl nisi scelerisque eu. Sit amet cursus sit amet dictum sit amet justo donec. Consequat interdum varius sit amet mattis. Convallis tellus id interdum velit laoreet id donec. Dapibus ultrices in iaculis nunc sed augue lacus viverra.
              </Typography>
              <div>
                <div className={classes.py} align="center">
                  <div className={classes.box}>READER COMMENTS</div>
                </div>
                <div>
                  <Grid container spacing={3}>
                    <Grid item>
                      <Avatar alt="" src="/images/avatar/test.png" className={classes.avatar}></Avatar>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item container spacing={2}>
                        <Grid item xs  direction="column">
                          <Typography variant="body2" style={{color: '#c69c6d'}}>
                            John Smith
                          </Typography>
                        </Grid>
                        <Grid item  direction="column">
                          <Typography variant="caption">
                            <Icon className={classes.icon} style={{ fontSize: 16, top: 5 }} name="wall-clock" />
                            20 June, 2019
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eget gravida cum sociis natoque penatibus et magnis. Rhoncus est pellentesque elit ullamcorper dignissim cras. Porttitor massa id neque aliquam vestibulum morbi blandit cursus.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} style={{paddingTop: '2rem'}}>
                    <Grid item>
                      <Avatar alt="" src="/images/avatar/test.png" className={classes.avatar}></Avatar>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item container spacing={2}>
                        <Grid item xs  direction="column">
                          <Typography variant="body2" style={{color: '#c69c6d'}}>
                            John Smith
                          </Typography>
                        </Grid>
                        <Grid item  direction="column">
                          <Typography variant="caption">
                            <Icon className={classes.icon} style={{ fontSize: 16, top: 5 }} name="wall-clock" />
                            20 June, 2019
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eget gravida cum sociis natoque penatibus et magnis. Rhoncus est pellentesque elit ullamcorper dignissim cras. Porttitor massa id neque aliquam vestibulum morbi blandit cursus.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} style={{paddingTop: '2rem'}}>
                    <Grid item>
                      <Avatar alt="" src="/images/avatar/test.png" className={classes.avatar}></Avatar>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item container spacing={2}>
                        <Grid item xs  direction="column">
                          <Typography variant="body2" style={{color: '#c69c6d'}}>
                            John Smith
                          </Typography>
                        </Grid>
                        <Grid item  direction="column">
                          <Typography variant="caption">
                            <Icon className={classes.icon} style={{ fontSize: 16, top: 5 }} name="wall-clock" />
                            20 June, 2019
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Eget gravida cum sociis natoque penatibus et magnis. Rhoncus est pellentesque elit ullamcorper dignissim cras. Porttitor massa id neque aliquam vestibulum morbi blandit cursus.
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                </div>
              </div>
              <div>
                <div className={classes.py} align="center">
                  <div className={classes.box}>ADD A COMMENT/MESSAGE</div>
                </div>
                <div>
                  <form noValidate className={classes.container} style={{paddingLeft: '2rem'}}>
                    <Grid xs={12} container spacing={3}>
                      <Grid item container spacing={10}>
                        <Grid item xs direction="column">
                          <FormControl fullWidth>
                            <InputLabel shrink htmlFor="comment_name">
                              Name
                            </InputLabel>
                            <CommentInput id="comment_name" />
                          </FormControl>
                        </Grid>
                        <Grid item xs direction="column">
                          <FormControl fullWidth>
                            <InputLabel shrink htmlFor="comment_email">
                              E-mail
                            </InputLabel>
                            <CommentInput id="comment_email" />
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Grid item xs>
                        <FormControl fullWidth>
                          <InputLabel shrink htmlFor="comment_message">
                            Message
                          </InputLabel>
                          <CommentInput multiline rows="5" id="comment_message" />
                        </FormControl>
                      </Grid>
                    </Grid>
                    <Grid xs={12} container direction="row" justify="flex-end" alignItems="center">
                      <SubmitButton variant="contained" style={{marginRight: 25, marginTop: 10}}>
                        SUBMIT
                      </SubmitButton>
                    </Grid>
                  </form>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4} style={{paddingLeft: 70}}>
              <div align="center">
                <div className={classes.floatLeft}>
                  <Icon className={classes.icon} style={{ fontSize: 18, top: 18 }} name="back-arrow" />
                </div>
                <div>
                  <Icon className={classes.icon} style={{ top: 11, width: 6.471 }} name="dots" viewBox="0 0 6.471 24.118" htmlColor="#2b8200" />
                  <Icon className={classes.icon} style={{ top: 11, width: 6.471 }} name="dots" viewBox="0 0 6.471 24.118" />
                  <Icon className={classes.icon} style={{ top: 11, width: 6.471 }} name="dots" viewBox="0 0 6.471 24.118" />
                  <Icon className={classes.icon} style={{ top: 11, width: 6.471 }} name="dots" viewBox="0 0 6.471 24.118" />
                </div>
                <div className={classes.ls_1} style={{fontSize: 11, marginTop: 15, marginLeft: 18, color: '#2b8200'}}>Health</div>
                <div className={classes.floatRight}>
                  <Icon className={classes.icon} style={{ fontSize: 18, top: -40 }} name="forward-arrow" />
                </div>
              </div>
              <div style={{paddingTop: '3rem'}} align="center">
                <div className={classes.box} style={{width: 'auto'}}>ABOUT AUTHOR</div>
                <div className={classes.py_2}>
                  <Avatar alt="" src="/images/avatar/test.png" className={classes.avatar}></Avatar>
                </div>
                <div className={classes.ls_1} style={{fontSize: 11, lineHeight: 1.8}}>
                  Lorem ipsum dolor sit amet, <br/>
                  consectetur adipiscing elit, <br/>
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div style={{fontSize: 13, color: '#c69c6d', paddingTop: '1rem'}}>
                  John Smith
                </div>
                <div style={{fontSize: 11}}>
                  <Icon className={classes.icon} style={{ fontSize: 25, top: 17 }} name="envelope" />MESSAGE
                  &nbsp;&nbsp;
                  <Icon className={classes.icon} style={{ fontSize: 19, top: 7 }} name="christmas-date" /> BOOK
                </div>
              </div>
              <div style={{paddingTop: '3rem'}} align="center">
                <div className={classes.box} style={{width: 'auto'}}>LATEST POSTS</div>
              </div>
              <div align="center">
                <FormControl className={classes.formControl}>
                  <Select
                    value={this.state.category}
                    onChange={handleChange}
                    displayEmpty
                    name="category"
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="">
                      <em>Choose your Category</em>
                    </MenuItem>
                    <MenuItem value="category_1">Category 1</MenuItem>
                    <MenuItem value="category_2">Category 2</MenuItem>
                    <MenuItem value="category_3">Category 3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <Grid container spacing={2} style={{paddingTop: '2rem'}}>
                  <Grid item>
                    <div className={classes.floatLeft} style={{borderLeft: '5px solid yellow', height:70, paddingRight:7}}></div>
                    <Avatar alt="" src="/images/avatar/test.png" className={classes.square_avatar}></Avatar>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item container spacing={2}>
                      <Grid item xs  direction="column">
                        <Typography variant="body2">
                          SAMPLE TEXT
                        </Typography>
                      </Grid>
                      <Grid item  direction="column">
                        <Avatar alt="" src="/images/article/sanctuary_logo.png" style={{width: 25, height: 25}}></Avatar>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{paddingTop: '2rem'}}>
                  <Grid item>
                    <div className={classes.floatLeft} style={{borderLeft: '5px solid green', height:70, paddingRight:7}}></div>
                    <Avatar alt="" src="/images/avatar/test.png" className={classes.square_avatar}></Avatar>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item container spacing={2}>
                      <Grid item xs  direction="column">
                        <Typography variant="body2">
                          SAMPLE TEXT
                        </Typography>
                      </Grid>
                      <Grid item  direction="column">
                        <Avatar alt="" src="/images/article/sanctuary_logo.png" style={{width: 25, height: 25}}></Avatar>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={2} style={{paddingTop: '2rem'}}>
                  <Grid item>
                    <div className={classes.floatLeft} style={{borderLeft: '5px solid blue', height:70, paddingRight:7}}></div>
                    <Avatar alt="" src="/images/avatar/test.png" className={classes.square_avatar}></Avatar>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item container spacing={2}>
                      <Grid item xs  direction="column">
                        <Typography variant="body2">
                          SAMPLE TEXT
                        </Typography>
                      </Grid>
                      <Grid item  direction="column">
                        <Avatar alt="" src="/images/article/sanctuary_logo.png" style={{width: 25, height: 25}}></Avatar>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div style={{paddingTop: '3rem'}} align="center">
                <div className={classes.box} style={{width: 'auto'}}>INSTAGRAM</div>
              </div>
              <div style={{paddingTop: '1.5rem'}}>
                <GridList cellHeight={70} spacing={10} className={classes.gridList} cols={4}>
                  <GridListTile>
                    <img alt="" src="/images/avatar/test.png" />
                  </GridListTile>
                  <GridListTile>
                    <img alt="" src="/images/avatar/test.png" />
                  </GridListTile>
                  <GridListTile>
                    <img alt="" src="/images/avatar/test.png" />
                  </GridListTile>
                  <GridListTile>
                    <img alt="" src="/images/avatar/test.png" />
                  </GridListTile>
                </GridList>                
              </div>
              <div style={{paddingTop: '4rem'}}>
                <img alt="" src="/images/avatar/test.png" style={{width: '100%'}} />
                <img alt="" src="/images/avatar/test.png" style={{width: '100%', paddingTop: '2.5rem'}} />
                <img alt="" src="/images/avatar/test.png" style={{width: '100%', paddingTop: '2.5rem'}} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    )
  }
}

export default withStyles(styles)(ArticlesContent);
