const styles = (theme) => ({
  content: {
    paddingTop: '5vh'
  },
  mainHeading: {
    fontSize: 'calc(8vw + 2em)',
    fontWeight: 'bold',
    letterSpacing: '2vw',
    color: 'white',
    marginTop: '10vh'
  },
  linkContainer: {
    width: 'calc(30vw + 220px)',
    height: '59px',
    borderRadius: '30px',
    backgroundColor: 'rgb(12, 44, 23)',
    paddingLeft: '20px',
    [theme.breakpoints.only('xs')]: {
      width: '80%'
    }
  },
  oneLink: {
    display: 'inline',
    fontSize: '1.5em',
    color: 'rgb(82, 172, 10)',
    fontWeight: 'bold',
    lineHeight: '2.4',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      fontSize: '1em',
      lineHeight: '1.8'
    }
  },
  linkIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '1em',
    marginLeft: '1em',
    [theme.breakpoints.only('xs')]: {}
  },
  contentDescription: {
    width: '100%',
    fontWeight: '1.1em',
    color: 'white',
    margin: '20px auto 6%',
    lineHeight: '1.6',
    letterSpacing: '2px'
  }
});
export default styles;
