export const containerStyles = theme => ({
  signUpCard: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '1rem',
    marginBottom: '12px',
    padding: '1.5rem 3rem',
    outline: 'none',
    position: 'absolute',
    top: '148px',
    display: 'flex',
    'flexDirection': 'column',
    wordWrap: 'break-word',
    backgroundClip: 'border-box',
    [theme.breakpoints.up('sm')]: {
      left: '5%',
      right: '5%',
    },
    [theme.breakpoints.down('sm')]: {
      left: '12px',
      right: '12px',
      padding: '1.5rem 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      left: '12px',
      right: '12px',
      padding: '1.5rem 1rem'
    },
    '@media (max-width:200px)': {
      top: '164px',
    }
  },  
  triangle: {
    position: 'absolute',
    margin: 'auto',
    top: '-7px',
    left: 0,
    right: 0,
    transform: 'rotate(225deg)',
    '-webkit-transform': 'rotate(225deg)',
    '-moz-transform': 'rotate(225deg)',
    '-o-transform': 'rotate(225deg)',
    '-ms-transform': 'rotate(225deg)',
    borderRight: '2.5px solid white',
    borderBottom: '2.5px solid white',
    width: '12px',
    height: '12px'
  },
  cardBorderBottom: {
    position: 'absolute',
    margin: 'auto',
    bottom: '-2px',
    left: '30%',
    width: '40%',
    borderBottom: '3px solid white',
  },
  cardBorderTopA: {
    position: 'absolute',
    margin: 'auto',
    top: '-2px',
    left: '30%',
    width: '19.3%',
    borderTop: '3px solid white',
  },
  
  cardBorderTopB: {
    position: 'absolute',
    margin: 'auto',
    top: '-2px',
    left: '50.7%',
    width: '19.3%',
    borderTop: '3px solid white',
  },
  
  cardBorderLeft: {
    position: 'absolute',
    margin: 'auto',
    left: '-2px',
    top: '15%',
    height: '70%',
    borderLeft: '3px solid white',
  },
  
  cardBorderRight: {
    position: 'absolute',
    margin: 'auto',
    right: '-2px',
    top: '15%',
    height: '70%',
    borderRight: '3px solid white',
  },

  cardDivider: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      width: '35.5%',
      top: '15%',
      height: '70%',
      borderLeft: '2px solid white',
    },
    [theme.breakpoints.down('sm')]: {
      margin: 'auto 0',
      width: '70%',
      left: '15%',
      height: '35.5%',
      borderTop: '2px solid white',
    }
  }
});

export const sideBarStyles = theme => ({
  signUpSidebarHeading: {
    display: 'inline-block',
    borderRadius: '0.5rem',
    padding: '0.25rem 1.125rem',
    backgroundColor: 'rgba(29,81,95,1)',
    fontWeight: 800,
    fontSize: '1.2rem',
    transform: 'scale(.9, 1)',
    letterSpacing: '3px',
    marginBottom: 0,
    marginLeft: 0

  },
  signUpSidebarBase: {
    [theme.breakpoints.up('sm')]: {
      margin: '0.5rem 0 0 -2rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '1.5rem 0 0 -1.5rem'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1.5rem 0 0 -1rem'
    }
  },
  signUpSidebarSection: {
    margin: '0 -1rem 0 0'
  },
  signUpSidebarText: {
    marginLeft: 0,
    color: "white",
    fontFamily: "Calibri sans-serif monospace",
    fontSize: '0.70rem',
    lineHeight: '1.5rem',
    transform: 'scale(.9, 1)',
    letterSpacing: '1px',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
      lineHeight: '1.375rem',
      marginLeft: 0
    },
    [theme.breakpoints.down('sm')]: {
      lineHeight: '1.25rem',
      marginLeft: 0
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: '1.125rem',
      letterSpacing: 0,
      transform: 'scale(1, 1)',
      marginLeft: '3.33%'
    },
  },
  signUpSidebarSphereContainer: {
    margin: '0.5rem 0 0 2rem',
    [theme.breakpoints.down('md')]: {
      margin: '0.5rem 0 1rem 3rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0.5rem 0 2rem 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0.5rem 0 1rem 1rem',
    }
  },
  textGreen: {
    color: 'rgba(69,154,24,1)'
  },
  textBlue: {
    color: 'rgba(2,140,243,1)'
  },
  textPink: {
    color: 'rgba(206,105,223,1)'
  },
  textYellow: {
    color: 'rgba(245,193,12,1)'
  }
})

export const signUpFormStyles = theme => ({
  signUpForm: {
    margin: '1.25rem 0 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0 1.5rem 0',
    },
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
    },
  },
  inputGroup: {
    margin: '0.5rem 1rem 1rem 0',
  },
  checkboxInputGroup: {
    margin: '0.5rem 0',
  },
  input: {
    marginTop: '0.25rem',
    '& fieldset': {
      border: 0,
      paddingLeft: 0
    },
    '& > div' : {
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
      backgroundColor: 'rgb(210,166,95,0.8)',
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
      lineHeight: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-5%',
      marginRight: '-5%',
      lineHeight: '1.375rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
      lineHeight: '1.25rem',
      letterSpacing: 0,
      transform: 'scale(1, 1)',
    },
  },
  textJustify: {
    textAlign: 'justify'
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
    margin: '2rem 0 0 -1rem',
  },
  checkbox: {
    margin: '-0.25rem 1.5rem 0 -0.25rem',
    padding: 0,
    color: "white",
    opacity: 0.7,
  },
  checkboxChecked: {
    
  },
  signupLink: {
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
    },
  },
})

export const verifyFormStyles = theme => ({
  verifyForm: {
    margin: '1rem 0 0 0',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0 1.5rem 0',
    },
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
    },
  },
  inputGroup: {
    margin: '1rem 1rem 1rem 0',
  },
  input: {
    marginTop: '0.25rem',
    '& fieldset': {
      border: 0,
      paddingLeft: 0
    },
    '& > div' : {
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
      backgroundColor: 'rgb(210,166,95,0.8)',
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
      lineHeight: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '-5%',
      marginRight: '-5%',
      lineHeight: '1.375rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
      lineHeight: '1.25rem',
      letterSpacing: 0,
      transform: 'scale(1, 1)',
    },
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
    margin: '2rem 0 0 -1rem',
  },
  checkbox: {
    margin: '-0.25rem 1.5rem 0 -0.25rem',
    padding: 0,
    color: "white",
    opacity: 0.7,
  },
  checkboxChecked: {
    
  }
})
