import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
      <Grid container spacing={24}  align="center">
      <Grid xs="12">
            <Button 
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Typography variant="subheading" gutterBottom style={{color:'#EFC7AD'}}>
              Game Guides ⇃
            </Typography> 
            </Button>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Typography variant="subheading" gutterBottom style={{color:'#EFC7AD'}}>
              Card Sets ⇃
            </Typography> 
            </Button>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Typography variant="subheading" gutterBottom style={{color:'#EFC7AD'}}>
              Community ⇃
            </Typography> 
            </Button>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Typography variant="subheading" gutterBottom style={{color:'#EFC7AD'}}>
              News ⇃
            </Typography> 
            </Button>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Typography variant="subheading" gutterBottom style={{color:'#EFC7AD'}}>
              Fireside Gatherings ⇃
            </Typography> 
            </Button>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Typography variant="subheading" gutterBottom style={{color:'#EFC7AD'}}>
              Esports ⇃
            </Typography> 
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Navigation 1</MenuItem>
              <MenuItem onClick={this.handleClose}>Navigation 2</MenuItem>
              <MenuItem onClick={this.handleClose}>Navigation 3</MenuItem>
        </Menu>
        </Grid>
        </Grid>
      </div>
      
    );
  }
}

export default SimpleMenu;
