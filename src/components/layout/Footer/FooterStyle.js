const styles = (theme) => ({
  footerStyle: {
    width: '100%',
    backgroundColor: '#434343',
    color: '#ffffff'
  },
  hcn: {
    opacity: '0.75',
    fontFamily: 'Calibri',
    fontSize: '30px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: '6px',
    textAlign: 'center',
    cursor: 'pointer'
  },
  linkStyle: {
    listStyle: 'none',
    lineHeight: '1.2'
  },
  footerTitle: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffffff',
    opacity: '0.9',
    fontSize: '14px',
    cursor: 'default'
  },
  footerLink: {
    textDecoration: 'none',
    color: '#ffffff',
    opacity: '0.65',
    fontSize: '12px',
    cursor: 'pointer',
    '&:hover': {
      opacity: '1'
    }
  }
});

export default styles;
