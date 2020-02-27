export const sideBarStyles = (theme) => ({
  signUpSidebarBase: {
    [theme.breakpoints.up('sm')]: {
      margin: '0.5rem 0 0 -2rem'
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
  signUpSidebarText: {
    marginLeft: 0,
    color: 'white',
    fontFamily: 'Calibri sans-serif monospace',
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
    }
  },
  signUpSidebarSphereContainer: {
    margin: '0.5rem 0 0 2rem',
    [theme.breakpoints.down('md')]: {
      margin: '0.5rem 0 1rem 3rem'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0.5rem 0 2rem 2rem'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0.5rem 0 1rem 1rem'
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
});