export const containerStyles = (theme) => ({
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
    flexDirection: 'column',
    wordWrap: 'break-word',
    backgroundClip: 'border-box',
    [theme.breakpoints.up('md')]: {
      left: '20%',
      right: '20%'
    },
    [theme.breakpoints.down('md')]: {
      left: '16%',
      right: '16%'
    },
    [theme.breakpoints.down('sm')]: {
      left: '8%',
      right: '8%',
      padding: '1.5rem 2rem'
    },
    [theme.breakpoints.down('xs')]: {
      left: '12px',
      right: '12px',
      padding: '1.5rem',
      top: '110px'
    },
    '@media (max-width:200px)': {
      top: '164px'
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
    borderBottom: '3px solid white'
  },
  cardBorderTopA: {
    position: 'absolute',
    margin: 'auto',
    top: '-2px',
    left: '30%',
    width: '19.3%',
    borderTop: '3px solid white'
  },

  cardBorderTopB: {
    position: 'absolute',
    margin: 'auto',
    top: '-2px',
    left: '50.7%',
    width: '19.3%',
    borderTop: '3px solid white'
  },

  cardBorderLeft: {
    position: 'absolute',
    margin: 'auto',
    left: '-2px',
    top: '15%',
    height: '70%',
    borderLeft: '3px solid white'
  },

  cardBorderRight: {
    position: 'absolute',
    margin: 'auto',
    right: '-2px',
    top: '15%',
    height: '70%',
    borderRight: '3px solid white'
  }
});
