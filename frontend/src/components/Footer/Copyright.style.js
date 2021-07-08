import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  copyright: {
    fontStyle: 'italic',
    fontSize: '.8rem',
    '@media(max-Width : 600px)': {
      // display: 'none'
    }
  }
}));

export default useStyles;
