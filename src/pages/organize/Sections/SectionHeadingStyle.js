const styles = (theme) => ({
  content: {
    paddingTop: '5vh'
  },
  humanimg: {
    display: 'block',
    [theme.breakpoints.only('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.only('sm')]: {
      display: 'none'
    }
  },
  img: {
    width: '200px',
    height: '200px'
  },
  headingPart: {
    order: 1,
    [theme.breakpoints.only('xs')]: {
      order: 2
    },
    [theme.breakpoints.only('sm')]: {
      order: 2
    }
  },
  spherePart: {
    order: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.only('xs')]: {
      order: 1,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.only('sm')]: {
      order: 1,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between'
    }
  },

  mainHeading: {
    fontSize: 'calc(7vw + 2em)',
    fontWeight: 'bold',
    letterSpacing: '2vw',
    color: 'white',
    marginTop: '2vh'
  },

  linkContainer: {
    width: 'calc(30vw + 240px)',
    height: '59px',
    borderRadius: '30px',
    backgroundColor: 'rgb(12, 44, 23)',
    paddingLeft: '20px',
    [theme.breakpoints.only('xs')]: {
      width: '60%'
    },
    [theme.breakpoints.only('sm')]: {
      width: '60%'
    }
  },

  contentDescription: {
    width: '100%',
    fontSize: '1.1em',
    color: 'white',
    margin: '20px auto 6%',
    lineHeight: '1.6',
    letterSpacing: '2px',
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.8em',
      lineHeight: '1.5',
      letterSpacing: '2px'
    }
  }
});
export default styles;
