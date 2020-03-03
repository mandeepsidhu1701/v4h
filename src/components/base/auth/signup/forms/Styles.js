export const signUpFormStyles = (theme) => ({
  signUpForm: {
    margin: '1.25rem 0 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0 1.5rem 0'
    }
  },
  inputGroup: {
    margin: '0.5rem 1rem 1rem 0'
  },
  label: {
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
  input: {
    marginTop: '0.25rem',
    '& fieldset': {
      border: 0,
      paddingLeft: 0
    },
    '& > div': {
      lineHeight: '1rem'
    }
  },
  inputBase: {
    borderRadius: '0.75rem',
    backgroundColor: 'white',
    padding: '1rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontSize: '0.75rem'
  },
  signUpLink: {
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

  signUpTextHeading: {
    color: 'rgba(210,166,95,1)',
    display: 'inline-block',
    fontFamily: 'Calibri sans-serif monospace',
    fontVariant: 'small-caps',
    fontSize: '1.55rem',
    fontWeight: 550,
    letterSpacing: '2px',
    transform: 'scale(.9, 1)',
    margin: '2rem 0 0 -1rem'
  },
  signUpText: {
    color: 'white',
    fontFamily: 'Calibri sans-serif monospace',
    fontSize: '0.70rem',
    lineHeight: '1.625rem',
    transform: 'scale(.9, 1)',
    letterSpacing: '1px',
    marginLeft: '-5%',
    marginRight: '-2.5%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '-5%',
      marginRight: '-2.5%',
      lineHeight: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-5%',
      marginRight: '-5%',
      lineHeight: '1.375rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
      lineHeight: '1.25rem',
      letterSpacing: 0,
      transform: 'scale(1, 1)'
    }
  },
  textJustify: {
    textAlign: 'justify'
  },

  checkboxInputGroup: {
    display: 'flex',
    flexWrap: 'nowrap',
    margin: '0.5rem 0'
  },
  checkBoxLabel: {
    display: 'inline-block',
    color: 'white',
    fontSize: '1rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontWeight: 600,
    margin: '0.125rem 0 0.125rem',
    transform: 'scale(.9, 1)'
  },
  checkbox: {
    margin: '-0.25rem 1rem 0 -0.25rem',
    padding: 0,
    color: 'white',
    opacity: 0.7
  },
  checkboxChecked: {},

  submitButton: {
    color: 'white',
    backgroundColor: 'rgb(210,166,95,1)',
    borderColor: 'rgb(210,166,95,1)',
    borderRadius: '0.25rem',
    padding: '0.75rem 2.5rem',
    fontSize: '0.66rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontWeight: 600,
    fontVariant: 'small-caps',
    margin: '1.5rem 0 0.5rem 0',
    transition: 'background-color 1s linear 0',
    '&:hover': {
      backgroundColor: 'rgb(210,166,95,0.8)'
    }
  }
});

export const verifyFormStyles = (theme) => ({
  verifyForm: {
    margin: '1rem 0 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0 1.5rem 0'
    }
  },
  label: {
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
  inputGroup: {
    margin: '1rem 1rem 1rem 0'
  },
  input: {
    marginTop: '0.25rem',
    '& fieldset': {
      border: 0,
      paddingLeft: 0
    },
    '& > div': {
      lineHeight: '1rem'
    }
  },
  inputBase: {
    borderRadius: '0.75rem',
    backgroundColor: 'white',
    padding: '1rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontSize: '0.75rem'
  },
  submitButton: {
    color: 'white',
    backgroundColor: 'rgb(210,166,95,1)',
    borderColor: 'rgb(210,166,95,1)',
    borderRadius: '0.25rem',
    padding: '0.75rem 2.5rem',
    fontSize: '0.66rem',
    fontFamily: 'Calibri sans-serif monospace',
    fontWeight: 600,
    fontVariant: 'small-caps',
    margin: '1.5rem 0 0.5rem 0',
    transition: 'background-color 1s linear 0',
    '&:hover': {
      backgroundColor: 'rgb(210,166,95,0.8)'
    }
  },
  signUpText: {
    color: 'white',
    fontFamily: 'Calibri sans-serif monospace',
    fontSize: '0.70rem',
    lineHeight: '1.625rem',
    transform: 'scale(.9, 1)',
    letterSpacing: '1px',
    marginLeft: '-5%',
    marginRight: '-2.5%',
    [theme.breakpoints.down('md')]: {
      marginLeft: '-5%',
      marginRight: '-2.5%',
      lineHeight: '1.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-5%',
      marginRight: '-5%',
      lineHeight: '1.375rem'
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
      lineHeight: '1.25rem',
      letterSpacing: 0,
      transform: 'scale(1, 1)'
    }
  },
  textJustify: {
    textAlign: 'justify'
  },
  textAlert: {
    fontSize: '1rem'
  },
  signUpTextHeading: {
    color: 'rgba(210,166,95,1)',
    display: 'inline-block',
    fontFamily: 'Calibri sans-serif monospace',
    fontVariant: 'small-caps',
    fontSize: '1.55rem',
    fontWeight: 550,
    letterSpacing: '2px',
    transform: 'scale(.9, 1)',
    margin: '2rem 0 0 -1rem'
  },
  checkbox: {
    margin: '-0.25rem 1.5rem 0 -0.25rem',
    padding: 0,
    color: 'white',
    opacity: 0.7
  },
  checkboxChecked: {}
});