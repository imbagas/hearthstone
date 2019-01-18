import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Background from '../src/images/coba-back.jpg';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbarbottom';
import buttonhero from '../src/images/button.png';
import Body from './Body';
import Banner from '../src/images/image.jpg';
import Emblem from '../src/images/emblem.png';


const styles = theme => ({
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

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{backgroundImage: "url(" + Background + ")"}}>
      <Grid container spacing={36}  align="center">
        <Grid item xs={12}>
          <img  src={Banner} style={{maxWidth: '100%', height:'auto', borderBottomLeftRadius:500, borderBottomRightRadius:500, }} alt="fireSpot"/>
          <img  className={classes.midbanner} src={Emblem} style={{widht:'350px', height:'175px'}} alt="fireSpot" />
            </Grid>
        <Grid item xs={12}>
             <br />
              <br />
            A fast-paced strategy card game for everyone
              <br />
              <br />
            <Typography variant="h3" gutterBottom>
            Cards
          </Typography>
            </Grid>
          <Body />
          <Grid item xs={12}>
          <br />
          <br />
          <img  src={buttonhero} alt="fireSpot"/>
          <br />
          <br />
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
          Play your Way:
          </Typography>
          <p>Find your perfect match in casual, ranked, and arena games, 
          participate in crazy Tavern Brawls, or practice against devious AI </p>
          <p> opponents and hone your skills in Hearthstone's adventure mode.</p>
            <br />
            <br />
          </Grid>
          </Grid>
      
      <Navbar />

    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);