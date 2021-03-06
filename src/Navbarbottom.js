import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Background from '../src/images/bottom-back.jpg';
import Card from '../src/images/emblem-bottom.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  midbanner: {
    position:'absolute', 
    left:'0',
    bottom:'0',
    marginBottom:'10',
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <AppBar position="static" color="default" style={{backgroundImage: "url(" + Background + ")"}}>
        <Toolbar>
        <img className={classes.midbanner} src={Card} style={{widht:'700px', height:'400px'}} alt="fireSpot"/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);