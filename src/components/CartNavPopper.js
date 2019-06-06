import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import SvgIcon from '@material-ui/core/SvgIcon';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import CartItem from './CartItem';

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
    color: 'black',
    padding: 20,
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  navPopper: {
    padding: 5,
    backgroundColor: '#FAFAFA',
    overflowY: 'scroll',
    maxHeight: 500,
  }
});

function CartIcon(props) {
    return (
      <SvgIcon {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
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
                <Link to='/sepet' style={{textDecoration: 'none'}}>
                  <h1 className={classes.cartHeader}>Sepet</h1>
                </Link>
                <CartItem image={"https://media3.tchibo-content.de/newmedia/art_img/MAIN_HD/ff16971b15e86f24/barista-espresso-500g-cekirdek-kahve.jpg"}
                          name={'Barista Espresso Çekirdek Kahve 500g'}
                          id={'1030114'}
                          price={'64,95 TL'} />
                <CartItem image={"https://media3.tchibo-content.de/newmedia/art_img/MAIN/f1f2830aa5e86f24/barista-caffe-crema-500g-cekirdek.jpg"}
                          name={'Barista Caffè Crema, Çekirdek Kahve 500g'}
                          id={'1030115'}
                          price={'64,95 TL'} />
              </Paper>
              </ClickAwayListener>
            </Fade>
          )}
        </Popper>
        <CartIcon onClick={this.handleClick('bottom-end')} className={classes.cartIcon} />
        
      </div>
    );
  }
}

PositionedPopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PositionedPopper);