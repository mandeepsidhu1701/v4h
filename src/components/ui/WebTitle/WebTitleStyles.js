export const styles = (theme) => ({
  navLogo: {
    position: 'relative',
    padding: '0.0875rem 0.5rem',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      padding: '0.25rem 0.5rem'
    }
  },
  navTextNearCentre: {
    margin: 0,
    color: '#AAAAAA',
    letterSpacing: '2px',
    fontSize: '1rem',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      fontSize: '0.875rem'
    }
  },
  navTextCentre: {
    position: 'relative',
    top: '0.25rem',
    margin: '0 0.25rem',
    fontWeight: '900',
    letterSpacing: '2px',
    fontSize: '1.625rem',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      top: '0.1rem',
      fontSize: '1.125rem'
    }
  }
});
