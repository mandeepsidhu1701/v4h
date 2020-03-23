const styles = (theme) => ({
  iconButtonContainer: {
    marginRight: '2%',
    padding: '0 5px',
    marginTop: 5,
    marginBottom: 5,
    border: '1px solid #BBBBBB',
    borderRadius: 36,
    display: 'flex'
  },
  metaButton: {
    marginRight: 4,
    padding: 6,
    paddingLeft: 8,
    paddingRight: 8,
    [`@media (min-width:${theme.navigationBar.width + 1}px)`]: {
      paddingLeft: 10,
      paddingRight: 8,
      paddingTop: 6,
      paddingBottom: 6
    }
  },
  butterflyButton: {
    padding: 6,
    paddingLeft: 8,
    paddingRight: 8,
    [`@media (min-width:${theme.navigationBar.width + 1}px)`]: {
      paddingLeft: 8,
      paddingRight: 10,
      paddingTop: 6,
      paddingBottom: 6
    }
  },
  metaIcon: {
    width: 24,
    height: 24,
    '@media (max-width:801px)': {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5)
    },
    '@media screen and (max-width:761px)': {
      width: theme.spacing(2.25),
      height: theme.spacing(2.25)
    },
    '@media screen and (max-width:480px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
    },
    '@media screen and (max-width:360px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
    }
  },
  butterflyIcon: {
    width: 24,
    height: 24,
    '@media (max-width:801px)': {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5)
    },
    '@media screen and (max-width:761px)': {
      width: theme.spacing(2.25),
      height: theme.spacing(2.25)
    },
    '@media screen and (max-width:480px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
    },
    '@media screen and (max-width:360px)': {
      width: theme.spacing(2),
      height: theme.spacing(2)
    }
  }
});

export {styles};
