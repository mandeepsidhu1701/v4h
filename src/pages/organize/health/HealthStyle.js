import healthBackground from '@/assets/images/organize/health_bg.png';

export const styles = (theme) => ({
  backgroundWrapper: {
    background: `url(${healthBackground})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    [theme.breakpoints.only('xs')]: {
      backgroundSize: 'auto 100%'
    }
  },
  content: {
    backgroundColor: 'rgba(3, 46, 16,0.7)'
  }
});
