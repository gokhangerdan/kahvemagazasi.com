import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import FilterCheckBox from './FilterCheckBox';

const styles = theme => ({
  cartIcon: {
    margin: theme.spacing(2),
    position: 'absolute',
    top: 0,
    right: 50,
    '&:hover': {
      color: '#BDBDBD',
      cursor: 'pointer',
    },
  },
  cartHeader: {
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: 22,
  },
  navPopper: {
    padding: 5,
    backgroundColor: '#FAFAFA',
  }
});


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
                <h1 className={classes.cartHeader}>Filtre</h1>
                <FilterCheckBox name={'Çekirdek Kahve'} />
                <FilterCheckBox name={'Espresso'} />
                <FilterCheckBox name={'Filtre Kahve'} />
              </Paper>
              </ClickAwayListener>
            </Fade>
          )}
        </Popper>
        <IconButton onClick={this.handleClick('bottom-end')} className={classes.iconButton} aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </div>
    );
  }
}

PositionedPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedPopper);