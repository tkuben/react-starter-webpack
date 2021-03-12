import { navbarLinks } from 'Assets/jss/global.js';
import { drawerWidth } from 'Assets/jss/global.js';

export default (theme) => ({
      root: {
        display: 'flex',
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
      },
      drawerPaper: {
        width: drawerWidth,
        marginTop: '68px',
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      navbarLinks
});