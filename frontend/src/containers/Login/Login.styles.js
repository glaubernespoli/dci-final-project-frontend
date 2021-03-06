import { makeStyles } from '@material-ui/styles';

const LoginStyles = makeStyles((theme) => ({
  mainDiv: {
    width: '34vw',
    margin: '2rem auto',
    padding: '2em 2rem',
    boxShadow: '0 0 4px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  textF: {
    margin: theme.spacing(1, 0)
  },
  typography: {
    margin: theme.spacing(3, 0),
    fontFamily: 'monospace',
    fontWeight: 'bold',
    textAlign: 'center'
  }
}));

export default LoginStyles;
