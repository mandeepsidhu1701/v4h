export const styles = (theme) => ({
  suspendisBox: {
    alignSelf: 'center'
  },
  contentQA: {
    background: 'rgba(255,255,255,0.15)',
    border: 'solid 1px rgb(255,255,255)',
    color: 'white'
  },
  contentGuide: {
    background: 'rgba(255,255,255,0.15)',
    border: 'solid 1px rgb(255,255,255)',
    color: 'white'
  },
  qaHeading: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    letterSpacing: '4px'
  },
  shareVideo: {
    alignSelf: 'center',
    padding: '2%',
    textAlign: 'center'
  },
  shareText: {
    marginTop: '1em',
    textAlign: 'center',
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.67)',
    lineHeight: '1.6',
    letterSpacing: '5px',
    '&:hover': {
      color: 'rgba(255,255,255,1)'
    }
  },
  visitText: {
    textAlign: 'center',
    fontSize: '1.8em',
    fontWeight: 'bold',
    opacity: '0.67',
    color: 'rgba(95, 210, 110,0.67)',
    lineHeight: '1.6',
    letterSpacing: '5px',
    '&:hover': {color: 'rgba(95, 210, 110,1)'}
  },
  workshopBtn: {
    margin: '5em auto 0',
    width: '100px',
    height: '28px',
    border: 'solid 2px #d2a75f',
    fontSize: '0.8em',
    lineHeight: '2.2',
    textAlign: 'center',
    letterSpacing: '1.5px',
    '&:hover': {
      backgroundColor: '#d2a75f'
    },
    [theme.breakpoints.only('xs')]: {
      margin: '1em auto 1em'
    }
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold'
  }
});
