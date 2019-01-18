import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../src/Header';
import Background from '../src/images/coba-back.jpg';
import Navbar from '../src/Navbarbottom';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: '50px',
      marginRight: '50px',
    },
  },
});

function Card(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{backgroundImage: "url(" + Background + ")"}}>
      <Grid container spacing={36}  align="center">
        <Grid item xs={12}>
         <Header />
        </Grid>
        <Grid item xs={12}>
       
      </Grid>
      </Grid>
      <Navbar />
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);