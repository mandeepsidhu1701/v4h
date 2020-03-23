const styles = (theme) => ({
  fixBar: {
    zIndex: 88,
    borderBottom: '1px solid #c0c0c0',
    boxShadow: 'none'
  },
  toolbar: {
    flexGrow: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
  },
  appBarContainer: {
    display: 'flex',
    justify: 'space-between',
    alignContent: 'center',
    width: '100%'
  },
  menuButtonContainer: {
    [`@media (min-width:${theme.navigationBar.width + 1}px)`]: {
      display: 'none'
    }
  },
  menuButton: {
    padding: 0,
    paddingTop: 4
  },
  menuButtonIcon: {
    fontSize: '4rem',
    height: '2rem',
    width: '4rem'
  },
  navContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '8%',
    [`@media (min-width:${theme.navigationBar.width + 1}px)`]: {
      marginLeft: '12.5%'
    }
  },
  navLinkContainer: {
    display: 'flex',
    justifyContent: 'center',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      display: 'none'
    }
  },
  navHeaderLink: {
    position: 'relative', 
    textAlign: 'center', 
    margin: 'auto 2em',
    [theme.breakpoints.down('md')]: {
      margin: 'auto 1em'
    },
    [`@media (max-width: 1050px)`]: {
      margin: 'auto 0.4em'
    }
  },
  navLink: {
    margin: '0 8px',
    padding: '0.25rem',
    fontSize: '1rem',
    lineHeight: '1.75',
    letterSpacing: '3px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
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
  triangle: {
    position: 'absolute',
    margin: 'auto',
    bottom: -4,
    transform: 'rotate(225deg)',
    '-webkit-transform': 'rotate(225deg)',
    '-moz-transform': 'rotate(225deg)',
    '-o-transform': 'rotate(225deg)',
    '-ms-transform': 'rotate(225deg)',
    borderRight: 'solid #c0c0c0 1px',
    borderBottom: 'solid #c0c0c0 1px',
    width: '6px',
    height: '6px',
    backgroundColor: '#ffffff'
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

export {styles};
