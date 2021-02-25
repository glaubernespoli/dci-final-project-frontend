import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },

  footerStyle: {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
}));
export default useStyles;
