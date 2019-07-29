export const containerStyles = theme => ({
  loginCard: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '1rem',
    padding: '1.5rem 3rem',
    outline: 'none',
    position: 'absolute',
    top: '148px',
    display: 'flex',
    marginBottom: '12px',
    'flexDirection': 'column',
    wordWrap: 'break-word',
    backgroundClip: 'border-box',
    [theme.breakpoints.up('md')]: {
      left: '20%',
      right: '20%',
    },
    [theme.breakpoints.down('md')]: {
      left: '16%',
      right: '16%',
    },
    [theme.breakpoints.down('sm')]: {
      left: '8%',
      right: '8%',
      padding: '1.5rem 2rem',
    },
    [theme.breakpoints.down('xs')]: {
      left: '12px',
      right: '12px',
      padding: '1.5rem',
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
  } 
});

export const formStyles = theme => ({
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
    },
  },
  loginForm: {
    marginTop: '1rem',
    flexGrow: 1,
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
    },
  },
  loginInputGroup: {
    margin: '1rem 1rem 1rem 0',
  },
  loginInput: {
    marginTop: '0.25rem',
    '& fieldset': {
      border: 0,
      paddingLeft: 0
    },
    '& > div' : {
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
      backgroundColor: 'rgb(210,166,95,0.8)',
    }
  },
  loginCheckbox: {
    margin: '-0.25rem 1.5rem 0 -0.25rem',
    padding: 0,
    color: "white",
    opacity: 0.7,
  },
  loginCheckboxChecked: {
    
  }
});
