export const styles = (theme) => ({
  navLogo: {
    position: 'relative',
    padding: '0.7rem 0.5rem 0 0.5rem'
  },
  navTextNearCentre: {
    margin: 0,
    color: '#AAAAAA',
    letterSpacing: '2px',
    [theme.breakpoints.only('xl')]: {
      fontSize: '0.875rem'
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '0.75rem'
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '0.625rem'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '0.5rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.325rem'
    }
  },
  navTextCentre: {
    position: 'relative',
    top: '0.25rem',
    margin: '0 0.25rem',
    fontWeight: '900',
    letterSpacing: '2px',
    [theme.breakpoints.only('xl')]: {
      fontSize: '1.625rem'
    },
    [theme.breakpoints.only('lg')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '1.325rem'
    },
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.25rem'
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.125rem'
    }
  }
});