export const styles = (theme) => ({
  navLogo: {
    padding: '0rem 0.5rem',
    paddingBottom: '0.225rem',
    minWidth: 225,
    width: 'auto',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      minWidth: 200,
      padding: '0rem 0.5rem'
    }
  },
  navTextNearCentre: {
    color: '#AAAAAA',
    letterSpacing: '2px',
    fontSize: '1rem',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      fontSize: '0.875rem'
    }
  },
  navTextCentre: {
    fontWeight: '900',
    letterSpacing: '2px',
    fontSize: '1.625rem',
    padding: '0rem 0.125rem',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      fontSize: '1.125rem'
    }
  }
});
