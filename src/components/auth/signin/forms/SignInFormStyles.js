export const formStyles = (theme) => ({
  loginLink: {
    display: 'inline-block',
    color: 'rgba(255,255,255,1.0)',
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: 'Calibri sans-serif monospace',
    fontSize: '1rem',
    fontWeight: 600,
    '-webkit-transform': 'scale(.9, 1)',
    transform: 'scale(.9, 1)',
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      float: 'right',
      marginRight: '0.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    }
  },
  loginForm: {
    marginTop: '1rem',
    flexGrow: 1
  },
  loginLabel: {
    display: 'inline-block',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontWeight: 600,
    margin: '0 0 0.125rem',
    transform: 'scale(.9, 1)',
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem'
    }
  },
  loginInputGroup: {
    margin: '1rem 1rem 1rem 0'
  },
  loginInput: {
    marginTop: '0.25rem',
    '& fieldset': {
      border: 0,
      paddingLeft: 0
    },
    '& > div': {
      lineHeight: '1rem'
    }
  },
  loginInputBase: {
    borderRadius: '0.75rem',
    backgroundColor: 'white',
    padding: '1rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontSize: '0.75rem',
    height: '1rem'
  },
  loginButton: {
    color: 'white',
    backgroundColor: 'rgb(210,166,95,1)',
    borderColor: 'rgb(210,166,95,1)',
    borderRadius: '0.25rem',
    padding: '0.75rem 2.5rem',
    fontSize: '0.66rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontWeight: 600,
    fontVariant: 'small-caps',
    margin: '2.5rem 0',
    transition: 'background-color 1s linear 0',
    '&:hover': {
      backgroundColor: 'rgb(210,166,95,0.8)'
    }
  },
  loginCheckbox: {
    margin: '-0.25rem 1.5rem 0 -0.25rem',
    padding: 0,
    color: 'white',
    opacity: 0.7
  },
  loginCheckboxChecked: {}
});