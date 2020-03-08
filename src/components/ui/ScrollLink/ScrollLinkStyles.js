const styles = (theme) => ({
  root: {
    width: 100,
    height: 45,
    overflow: 'hidden',
    position:'relative'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Roboto',
    fontWeight: '700',
    letterSpacing: 3.2,
    fontSize: '0.875rem',
    textAlign: 'center',
    display: 'block',
    width: '100%',
    paddingRight: 7,
    paddingLeft: 13,
    paddingBottom: 3
  },
  scrollLine: {
    position: 'absolute',
    width: 80,
    height: 2,
    left: 10,
    overflow: 'hidden',
    '& div': {
      position: 'absolute',
      color: 'white',
      lineHeight: 1.7,
      width: 80,
      height: 2,
      backgroundColor: 'white',
      animationDuration: '3s',
      animationFillMode: 'both',
      animationIterationCount: 'infinite',
      animationName: '$scroll',
      animationTimingFunction: 'ease-in-out'
    }
  },
  '@keyframes scroll': {
    'from, 5%': {width: 0},
    '33%,66%': {left: 0, width: 80},
    '95%, to': {left: 80}
  }
});

export default styles;
