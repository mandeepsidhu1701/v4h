const styles = (theme) => ({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    '& > div.MuiPopover-paper': {
      backgroundColor: 'rgba(255, 255, 255, 0)'
    }
  },
  card: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  content: {
    marginTop: '6px',
    paddingTop: '12px',
    paddingLeft: '0px',
    paddingRight: '13px',
    paddingBottom: '12px',
    minHeight: '70px',
    minWidth: '500px',
    textAlign: 'left',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      minWidth: '200px',
      maxWidth: '300px'
    }
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto'
  },
  link: {
    color: '#0044ff'
  },
  verticalDivider: {
    marginRight: '20px',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      display: 'none'
    }
  },
  horizontalDividerContainer: {
    [`@media (min-width:${theme.navigationBar.width - 1}px)`]: {
      display: 'none'
    }
  },
  horizontalDivider: {
    [`@media (min-width:${theme.navigationBar.width - 1}px)`]: {
      display: 'none'
    }
  },

  sanctuaryProfileSwitch: {
    marginTop: '10px',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      marginLeft: '16px'
    }
  },
  sanctuaryProfileLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      marginLeft: '16px'
    }
  },
  sanctuaryProfileLogo: {
    width: '24px',
    height: '24px',
    marginRight: '5px'
  },
  triangle: {
    position: 'absolute',
    margin: '0',
    transform: 'rotate(225deg)',
    borderRight: 'solid rgba(0, 0, 0, 0.12) 1px',
    borderBottom: 'solid rgba(0, 0, 0, 0.12) 1px',
    width: '6px',
    height: '6px',
    backgroundColor: '#ffffff',
    top: '3px',
    right: '55px',
    [`@media (max-width:${theme.navigationBar.width}px)`]: {
      right: '25px'
    }
  }
});

export {styles};
