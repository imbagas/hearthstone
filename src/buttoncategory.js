import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
        <Button
         variant="contained"
         style={{backgroundColor: '#FF7F50'}}
          onClick={this.handleClick}
        >
          Category
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Card sets</MenuItem>
          <MenuItem onClick={this.handleClose}>Guide</MenuItem>
          <MenuItem onClick={this.handleClose}>Adventures</MenuItem>
          <MenuItem onClick={this.handleClose}>Forum</MenuItem>
          <MenuItem onClick={this.handleClose}>News</MenuItem>
          <MenuItem onClick={this.handleClose}>Address</MenuItem>

        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;