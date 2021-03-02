import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#041F60',
    },
    secondary: {
        main: '#2CEEF0',

    },
    error: {
      main: red[500],
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;