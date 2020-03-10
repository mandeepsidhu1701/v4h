const styles = (theme) => ({
  root: {
    minHeight: 32,
    position: 'relative'
  },
  line: {
    width: 45,
    height: 2,
    borderRadius: 2,
    marginBottom: 6,
    position: 'relative',
    background: '#000000',
    '&:last-child': {
      marginBottom: 0
    }
  }
});

export default styles;
