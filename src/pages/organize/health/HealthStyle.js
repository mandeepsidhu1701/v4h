import healthBackground from '@/assets/images/organize/health_bg.png';

export const styles = (theme) => ({
  backgroundWrapper: {
    background: `url(${healthBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top'
  },
  content: {
    backgroundColor: 'rgba(3, 46, 16,0.7)',
    paddingBottom: '10%'
  },
  linkIcon: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '1em'
  },
  oneLink: {
    display: 'inline',
    fontSize: '1.5em',
    color: 'rgb(82, 172, 10)',
    fontWeight: 'bold',
    lineHeight: '2.4',
    [theme.breakpoints.only('md')]: {
      fontSize: '1.2em',
      lineHeight: '2.5'
    },
    [theme.breakpoints.only('sm')]: {
      display: 'block',
      fontSize: '1em',
      lineHeight: '1.8'
    },
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      fontSize: '1em',
      lineHeight: '1.8'
    }
  }
});
