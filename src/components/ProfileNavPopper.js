import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import SvgIcon from '@material-ui/core/SvgIcon';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Login from './Login';

const styles = theme => ({
  profileIcon: {
    margin: theme.spacing(2),
    position: 'absolute',
    top: 0,
    right: 0,
    '&:hover': {
      color: '#BDBDBD',
      cursor: 'pointer',
    },
  },
  cartHeader: {
    textAlign: 'center',
    cursor: 'pointer',
    color: 'black',
    padding: 10,
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  navPopper: {
    padding: 5,
    backgroundColor: '#FAFAFA',
    maxWidth: 250,
  }
});

function AccountIcon(props) {
    return (
      <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18"><path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z"/></svg>
      </SvgIcon>
    );
  }

class PositionedPopper extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    placement: null,
  };

  handleClick = placement => event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: state.placement !== placement || !state.open,
      placement,
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open, placement } = this.state;

    return (
      <div>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={10}>
              <ClickAwayListener onClickAway={this.handleClickAway}>
              <Paper className={classes.navPopper}>
                <Link to='/profil' style={{textDecoration: 'none'}}>
                  <h1 className={classes.cartHeader}>Profil</h1>
                </Link>
                <Login />
              </Paper>
              </ClickAwayListener>
            </Fade>
          )}
        </Popper>
        <AccountIcon onClick={this.handleClick('bottom-end')} className={classes.profileIcon} />
      </div>
    );
  }
}

PositionedPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedPopper);