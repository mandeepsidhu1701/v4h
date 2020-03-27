import healthBackground from '@/assets/images/organize/health_bg.png';

export const styles = (theme) => ({
  backgroundWrapper: {
    background: `url(${healthBackground})`,
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top'
  },
  content: {
    backgroundColor: 'rgba(3, 46, 16,0.7)'
  }
});
