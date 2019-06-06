import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

import CartNavPopper from '../components/CartNavPopper';
import ProfileNavPopper from '../components/ProfileNavPopper';
import CartItem from '../components/CartItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 150,
    position: 'relative',
  },
  homeIcon: {
    margin: theme.spacing(2),
    position: 'absolute',
    top: 0,
    right: 100,
    color: 'black',
    '&:hover': {
      color: '#BDBDBD',
      cursor: 'pointer',
    },
  },
  heroHeader: {
    fontSize: 70,
    cursor: 'pointer',
  },
  heroCaption: {
    color: '#BDBDBD',
  },
  heroImage: {
    position: 'absolute',
    left: 10,
    top: -90,
  },
  readyButton: {
    textTransform: 'none',
    backgroundColor: '#795548',
    color: '#FAFAFA',
  },
  totalPrice: {
    paddingTop: 10,
    fontSize: 22,
  }
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    </SvgIcon>
  );
}

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Link to='/'>
        <HomeIcon className={classes.homeIcon} />
      </Link>
      <CartNavPopper />
      <ProfileNavPopper />
      <div className={classes.root}>
        <h1>Sepet</h1>
        <CartItem image={"https://media3.tchibo-content.de/newmedia/art_img/MAIN_HD/ff16971b15e86f24/barista-espresso-500g-cekirdek-kahve.jpg"}
                  name={'Barista Espresso Çekirdek Kahve 500g'}
                  id={'1030114'}
                  price={'64,95 TL'} />
        <CartItem image={"https://media3.tchibo-content.de/newmedia/art_img/MAIN/f1f2830aa5e86f24/barista-caffe-crema-500g-cekirdek.jpg"}
                  name={'Barista Caffè Crema, Çekirdek Kahve 500g'}
                  id={'1030115'}
                  price={'64,95 TL'} />
        <p className={classes.totalPrice}>Toplam tutar: 129,90 TL</p>
        <Button variant="contained" className={classes.readyButton}>Alışverişi Tamamla</Button>
      </div>
      <footer className={classes.footer}>
        <p style={{
          textAlign: 'center',
          padding: 50,
          marginTop: 150,
          backgroundColor: '#FAFAFA',
          color: '#212121',
        }}>Made with <span style={{color: '#FF7043'}}>&hearts;</span> by <span style={{color: '#9E9E9E', cursor: 'pointer'}}>gokhang.</span></p>
      </footer>
    </div>
  );
}

export default Home;