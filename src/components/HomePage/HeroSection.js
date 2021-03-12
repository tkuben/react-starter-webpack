import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    height: '500px',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

function HeroSection(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
    >
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Do It Yourself Investing
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            Do-it-yourself (DIY) Investing, self-directed investing or self-managed investing is an investment approach where the investor chooses to build and manage his or her own investment portfolio instead of hiring an agent, such as a stockbroker, investment adviser, private banker, or financial planner. DIYI's platform helps you track and facilitate your investment journey.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default HeroSection;
