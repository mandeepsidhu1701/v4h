import {createMuiTheme} from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const defaults = {
  navigationBar: {
    width: 800
  }
};

const theme = createMuiTheme({
  ...defaults,
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

const styles = {
  footer: {
    gridRowStart: '2',
    gridRowEnd: '3'
  },
  contentContainer: {
    marginTop: '53px'
  }
};

export {styles, theme};
