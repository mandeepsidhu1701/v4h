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
    padding: '8px'
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
    padding: '8px'
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
  navLogo: {
    position: 'relative',
    padding: '0.7rem 0.5rem 0 0.5rem'
  },
  navTextNearCentre: {
    margin: 0,
    color: '#AAAAAA',
    letterSpacing: '2px',
    [theme.breakpoints.only('xl')]: {
      fontSize: '0.875rem'
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '0.75rem'
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '0.625rem'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '0.5rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.325rem'
    }
  },
  navTextCentre: {
    position: 'relative',
    top: '0.25rem',
    margin: '0 0.25rem',
    fontWeight: '900',
    letterSpacing: '2px',
    [theme.breakpoints.only('xl')]: {
      fontSize: '1.625rem'
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.325rem'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.25rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.125rem'
    }
  },
  navLink: {
    ...theme.typography.button
  },
  iconButtonContainer: {
    marginRight: '2%',
    padding: '0 2px',
    border: '1px solid #BBBBBB',
    borderRadius: '36px'
  },
  metaButton: {
    marginRight: '4px'
  },
  butterflyButton: {},
  metaIcon: {
    width: '24px',
    height: '24px'
  },
  butterflyIcon: {
    width: '24px',
    height: '24px'
  }
});

export {styles, theme};