import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Emblem from './images/emblem-bottom.png';
import Card from './images/Cards.png';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function AutoGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
      <Grid item xs={4}>
      <Link to='/card'> <img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/> </Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/> Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
        <Grid item xs={4}>
        <Link to='/card'><img  src={Card} style={{maxWidth: '100%', height:'auto'}} alt="fireSpot"/></Link>
        <br />
        <Link to='/card'><img src={Emblem} widht="100px" height="50px" alt="fireSpot"/>Anomalus</Link>
        </Grid>
      </Grid>
    </div>
  );
}

AutoGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);