export const styles = (theme) => ({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
    transition: '.5s ease',
    '&:hover': {
      opacity: 1
    }
  },
  container: {
    position: 'relative'
  }
});