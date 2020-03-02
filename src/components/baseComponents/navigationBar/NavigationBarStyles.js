import {createMuiTheme} from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    }
  },
  typography: {
    button: {
      letterSpacing: '3px',
      padding: '0.25rem',
      fontWeight: 'bold',
      margin: '0 8px',
      fontSize: '0.5rem',
      [defaultTheme.breakpoints.only('xl')]: {
        fontSize: '1rem'
      },
      [defaultTheme.breakpoints.only('lg')]: {
        fontSize: '0.875rem'
      },
      [defaultTheme.breakpoints.only('md')]: {
        fontSize: '0.75rem'
      }
    }
  }
});

const styles = (theme) => ({
  toolbar: {
    flexGrow: 1,
    padding: 8
  },
  appBarContainer: {
    display: 'flex',
    justify: 'space-between',
    alignContent: 'center',
    width: '100%'
  },
  menuButtonContainer: {
    '@media (min-width:801px)': {
      display: 'none'
    }
  },
  menuButton: {
    padding: 8
  },
  navContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    '@media (min-width:801px)': {
      marginLeft: '12.5%'
    }
  },
  navLinkContainer: {
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width:800px)': {
      display: 'none'
    }
  },
  navLink: {
    ...theme.typography.button,
    fontWeight: 'bold'
  },
  navHover: {
    opacity: '0.11',
    fontSize: '38px',
    fontWeight: 'bold',
    fontFamily: 'Calibri',
    position: 'absolute',
    display: 'inline-block',
    top: 0,
    left: 0,
    right: 0
  },
  iconButtonContainer: {
    marginRight: '2%',
    padding: '0 2px',
    border: '1px solid #BBBBBB',
    borderRadius: 36,
    display: 'flex'
  },
  metaButton: {
    marginRight: 4,
    padding: 12,
    '@media (max-width:801px)': {
      padding: 10
    },
    '@media screen and (max-width:761px)': {
      padding: 8
    },
    '@media screen and (max-width:480px)': {
      padding: 6
    },
    '@media screen and (max-width:360px)': {
      padding: 6
    }
  },
  butterflyButton: {
    padding: 12,
    '@media (max-width:801px)': {
      padding: 10
    },
    '@media screen and (max-width:761px)': {
      padding: 8
    },
    '@media screen and (max-width:480px)': {
      padding: 6
    },
    '@media screen and (max-width:360px)': {
      padding: 6
    }
  },
  metaIcon: {
    width: 24,
    height: 24,
    '@media (max-width:801px)': {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5)
    },
    '@media screen and (max-width:761px)': {
      width: theme.spacing(2.25),
      height: theme.spacing(2.25)
    },
    '@media screen and (max-width:480px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
    },
    '@media screen and (max-width:360px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
    }
  },
  butterflyIcon: {
    width: 24,
    height: 24,
    '@media (max-width:801px)': {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5)
    },
    '@media screen and (max-width:761px)': {
      width: theme.spacing(2.25),
      height: theme.spacing(2.25)
    },
    '@media screen and (max-width:480px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
    },
    '@media screen and (max-width:360px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
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
  },

  list: {
    width: '250px'
  },

  sideMainMenu: {
    marginLeft: '0.5rem'
  },

  sidemenuLink: {
    cursor: 'pointer',
    marginLeft: '2rem',
    textDecoration: 'none',
    color: '#1d1d1d'
  }
});

export {styles, theme};
