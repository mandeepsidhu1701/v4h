const styles = theme => ({
  /** general */
  fontBase: {
    fontFamily: 'Roboto',
    color: 'white',
    letterSpacing: '2px',
    lineHeight: 1.5,
    fontWeight: 500,
  },
  buttonBase: {
    border: 'solid 2px rgba(205,164,96, 1)',
    fontWeight: 700,
    marginBottom: '4rem',
    fontSize: '0.5rem',
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: '0.25rem 1.25rem'
  },
  linkBase: {
    textDecoration: 'none'
  },

  /** Landing cover styles */
  landingRoot: {
    backgroundColor: "#C0D2DE",
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 90,
    width: '100%',
    height: '100%'
  },
  landingImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    zIndex: 90,
  },
  landingImageAnimation: {
    animation: '$scaleAnimation 5s 1 ease-out',
  },
  landingScrollUp: {
    animation: '$moveLandingUp 0.5s 1 linear',
  },
  genome: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: '0.5rem',
    position: 'absolute',
    width: '40%',
    marginLeft: '-20%',
    padding: '0.25rem',
    top: '46px',
    left: '50%',
    zIndex: 93,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '1.75rem',
    color: 'rgba(29,80,95,1)',
    opacity: '0.35',
    letterSpacing: '2.5px',
    transform: 'scale(1, 0.9)',
    [theme.breakpoints.only('sm')]: {
      fontSize: '1.75rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.5rem',
    }
  },
  siteName: {
    position: 'absolute',
    width: '60%',
    marginLeft: '-45%',
    top: '55%',
    left: '66%',
    zIndex: 91,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '2.625rem',
    fontWeight: '900',
    color: "white",
    [theme.breakpoints.only('sm')]: {
      fontSize: '2.125rem',
      top: '46%',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.75rem',
      top: '37%',
    }
  },
  authSpan: {
    zIndex: 92,
    position: 'absolute',
    width: '90%',
    marginLeft: '-45%',
    top: '95px',
    left: '50%',
    textAlign: 'center',
    fontSize: '1.125rem',
    fontWeight: 900,
    [theme.breakpoints.only('xs')]: {
      fontSize: '1rem',
    },
    '@media (max-width:521px)': {
      top: '120px',
    }
  },
  modalOverflow: {
    overflow: 'auto',
  },
  authLink: {
    "text-decoration": 'none',
    letterSpacing: '3px',
    transform: 'scale(1, 0.85)',
    color: 'white',
    "& visited": {
      color: 'white',
      "text-decoration": 'none',
    },
    "& hover": {
      color: 'white',
      "text-decoration": 'none',
    },
  },
  authLinkHighlight: {
    "text-decoration": 'underline',
  },
  authSpacer: {
    margin: '0 24px',
    [theme.breakpoints.only('xs')]: {
      margin: '0 3.75%',
    }
  },
  closeIconButton: {
    zIndex: 91,
    display: 'block',
    textAlign: "center",
    position: 'absolute',
    bottom: '32px',
    left: '0',
    right: '0'
  },
  hidden: {
    display: 'none',
  },
  "@keyframes scaleAnimation": {
    from: { width: '134%', height: '134%', top: '-17%', left: '-17%' },
    to: { width: '100%', height: '100%', top: '0', left: '0' }
  },
  "@keyframes moveLandingUp": {
    from: { top: '0%' },
    to: { top: '-100%' }
  },
  sphereSideBar: {
    zIndex: 91,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '22.5%',
    left: '85%',
    /* [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      top: '66%',
      left: '22%',
    } */
  },
  sphereLink: {
    marginBottom: '4rem',
    /* [theme.breakpoints.only('sm')]: {
      marginRight: '5%',
      '& last-child': {
        marginRight: 0,
      }
    },
    [theme.breakpoints.only('xs')]: {
      marginRight: '2%',
      '& last-child': {
        marginRight: 0,
      }
    }, */
  },

  /** Home Page styles */
  mainPageBackground: {
    backgroundColor: 'rgba(0,80,180,1)',
    overflowX: 'hidden'
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  gridContainerPadding: {
    padding: '0.5rem 4rem',
    [theme.breakpoints.only('sm')]: {
      padding: '0.5rem 2rem',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '0.5rem 1rem',
    }
  },
  inspireQuote: {
    fontFamily: 'Roboto',
    fontSize: '2.75rem',
    fontWeight: 600,
    color: 'white',
    marginTop: '17rem',
    lineHeight: '1.5',
    letterSpacing: '2px',
    textAlign: 'center',
    transform: 'scale(1, 1.05)',
    [theme.breakpoints.only('sm')]: {
      fontSize: '2.16rem',
      marginTop: '13rem',
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.66rem',
      marginTop: '9rem',
    }
  },
  inspireQuoteCitation: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 100,
    opacity: 0.75,
    textAlign: 'right',
    marginRight: '3rem',
    textVariant: 'small-caps',
  },
  paragraphTextSmall: {
    color: 'white',
    letterSpacing: '1px',
    textAlign: 'left',
    transform: 'scale(1, 0.95)',
    lineHeight: 1.5,
    fontFamily: 'Roboto',
    fontSize: '0.88rem',
    fontWeight: 500,
  },
  siteDescriptionContainer: {
    marginTop: '18rem',
    [theme.breakpoints.only('sm')]: {
      marginTop: '12rem',
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: '6rem',
    }
  },
  butterflyGreyIcon: {
    width: '10%',
    [theme.breakpoints.only('sm')]: {
      width: '100%',
      margin: '2rem 0'
    },
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      margin: '2rem 0'
    }
  },
  aboutUsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10% 12.5%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid white',
    [theme.breakpoints.only('sm')]: {
      padding: '8%',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '5%',
    }
  },
  aboutUsTitle: {
    color: 'black',
    fontWeight: 700,
    fontSize: '1.125rem',
    paddingBottom: '4rem',
    letterSpacing: '3px'

  },
  aboutUsText: {
    color: 'black',
    fontSize: '0.75rem',
    lineHeight: 2,

  },
  metamorphicMediaContainer: {
    padding: '0 20%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  metamorphicMediaTitle: {
    textAlign: 'center',
    margin: '4rem 0 1rem 0',
    letterSpacing: '4px',
    fontSize: '1rem'
  },
  metamorphicMediaText: {
    fontWeight: 900,
    lineHeight: 2,
    textAlign: 'center',
    marginBottom: '2rem'
  },
  metamorphicMediaCaption: {
    opacity: 0.75,
    fontSize: '0.75rem',
    fontWeight: 700,
    marginBottom: '1rem'
  },
  metamorphicMediaButton: {

  },
  videoParentContainer: {
    backgroundColor: 'rgba(255,255,255,0.33)',
    [theme.breakpoints.only('sm')]: {
      marginBottom: '4rem'
    },
    [theme.breakpoints.only('xs')]: {
      marginBottom: '4rem'
    }
  },
  videoContainer: {
    position: 'relative',
  },
  videoContainerTitle: {
    fontWeight: 900,
    color: 'black',
    position: 'absolute',
    top: '3%',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  videoVolunteers: {
    width: '100%',
  },
  videoVolunteerPlayButton: {
    position: 'absolute',
    color: 'white',
    opacity: 0.8,
    left: '1%',
    bottom: '1%',
  },
  videoVolunteerPlayIcon: {
    width: '3rem',
    height: '3rem',
  },
  videoCaption: {
    padding: '1.5rem 3rem',
    fontSize: '0.625rem',
    border: '1px solid white',
    textAlign: 'center',
    [theme.breakpoints.only('sm')]: {
      padding: '1rem 2rem',
      fontSize: '0.5rem',
    },
    [theme.breakpoints.only('xs')]: {
      padding: '0.5rem 1rem',
      fontSize: '0.5rem',
    }
  },
  corePrincipalsContainer: {
    position: 'relative',
    height: '150%',
    [theme.breakpoints.only('sm')]: {
      height: '4rem',
      marginBottom: '75%'
    },
    [theme.breakpoints.only('xs')]: {
      height: '4rem',
      marginBottom: '75%'
    }
  },
  corePrincipalsImage: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  corePrincipalsTitle: {
    position: 'absolute',
    left: '0',
    width: '100%',
    textAlign: 'center',
    top: '1.125rem',
    // TODO DEBUG remove the color when done
    color: 'red',
    fontSize: '0.9rem',
  },
  corePrincipalsPanel: {
    position: 'absolute',
    left: 0,
    top: '92%',
    width: '100%',
    height: '30%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  corePrincipalsText: {
    position: 'relative',
    top: '10%',
    left: '7.5%',
    width: '85%',
    textAlign: 'justify',
    fontSize: "0.8rem",
  },
  corePrincipalsDivider: {
    borderTop: 'solid 1px rgb(210,167,95)',
    position: 'absolute',
    left: "7.5%",
    width: '85%',
    top: '60%',
    [theme.breakpoints.only('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.only('xs')]: {
      display: 'none'
    }
  },
  corePrincipalsButton: {
    color: 'rgb(210,167,95)',
    fontSize: '1.125rem',
    position: 'relative',
    marginTop: '3.6%'
  },
  corePrinciplesBlip: {
    borderRadius: '50%',
    backgroundColor: 'rgb(210,167,95)',
    border: '1px solid rgb(210,167,95)',
    height: '5px',
    width: '5px',
    display: 'inline-block',
    position: 'relative',
    marginTop: 0
  },
  corePrincipalsButtonVision: {
    left: '4%',
  },
  corePrincipalsButtonMission: {
    left: '8%',
  },
  corePrincipalsButtonCharter: {
    left: '12%',
  },
  corePrincipalsButtonCompass: {
    left: '18%',
  },
  corePrincipalsButtonMetawheel: {
    left: '21%',
  },
  corePrincipalsButtonInitiatives: {
    left: '24%',
  },
  urbanSanctuaryContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  urbanSanctuaryImage: {
    width: '80%',
    margin: '10%',
    [theme.breakpoints.only('sm')]: {
      width: '40%',
      margin: '5% 30%',
    },
    [theme.breakpoints.only('xs')]: {
      width: '40%',
      margin: '5% 30%',
    }
  },
  urbanSanctuaryButton: {

  },
  metawheelContainer: {
    marginTop: '25%'
  },
  metawheelImage: {
    width: "100%",
  },
  metawheelTitle: {
    marginTop: '2rem',
    textAlign: "center",
    fontSize: '1.45rem',
    fontWeight: 700,
    letterSpacing: '6px',
  },
  metawheelText: {
    marginTop: '1rem',
    marginBottom: '6rem',
    textAlign: "center",
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '4px',
  }
});

export default styles;