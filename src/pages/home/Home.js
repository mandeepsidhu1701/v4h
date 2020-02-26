import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import intl from 'react-intl-universal'
import {withStyles} from '@material-ui/core/styles';
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
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {contentSubmenu, networkSubmenu} from '../../components/submenu/submenuData'
import MenuContent from '../../components/submenu/MenuContent';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import {APP_TITLE, SECOND_GENOME} from '../../common/i18n';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff'
        }
    }
});

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    textButton: {
        fontFamily: 'Calibri',
        '&:hover': {
            backgroundColor: '#ffffff',
            paddingtop: '10px'
        }
    },
    triangle: {
        position: 'absolute',
        margin: 'auto',
        bottom: -2.5,
        transform: 'rotate(225deg)',
        '-webkit-transform': 'rotate(225deg)',
        '-moz-transform': 'rotate(225deg)',
        '-o-transform': 'rotate(225deg)',
        '-ms-transform': 'rotate(225deg)',
        borderRight: 'solid #c0c0c0 1px',
        borderBottom: 'solid #c0c0c0 1px',
        width: '6px',
        height: '6px',
        backgroundColor: '#ffffff',
        zIndex: 10
    }
});

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            open: false,
            anchorEl: null,
            trianglePosition: 0
        }
    }

    handleClick = (submenuData) => (e) => {
        const leftPosition = e
            .target
            .getBoundingClientRect()
            .left
        const menuWidth = e
            .target
            .getBoundingClientRect()
            .width
        this.setState({
            data: submenuData,
            open: true,
            anchorEl: ReactDOM.findDOMNode(this.refs.header),
            trianglePosition: leftPosition + (menuWidth / 2.3)
        })
    }
    handleClose = () => {
        this.setState({data: null, open: false, anchorEl: null})
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon/>
                            </IconButton>
                            <Button className={classes.textButton}>
                                INTRO
                            </Button>
                            <Button
                                className={classes.textButton}
                                onClick={this.handleClick(contentSubmenu)}>
                                CONTENT
                            </Button>
                            <Button>
                                SECOND HCN Genome
                            </Button>
                            <Button className={classes.textButton}>
                                ORGANIZE
                            </Button>
                            <Button
                                className={classes.textButton}
                                onClick={this.handleClick(networkSubmenu)}>
                                NETWORK
                            </Button>
                            <MenuContent
                                submenuData={this.state.data}
                                submenuOpen={this.state.open}
                                submenuAnchorEl={this.state.anchorEl}
                                submenuClose={this.handleClose}/>
                            <div
                                className={classes.triangle}
                                style={{
                                left: this.state.trianglePosition,
                                display: this.state.open
                                    ? 'block'
                                    : 'none'
                            }}/>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
