import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import CartNavPopper from '../components/CartNavPopper';
import ProfileNavPopper from '../components/ProfileNavPopper';
import FavItem from '../components/FavItem';

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
    color: 'black',
    top: 0,
    right: 100,
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
  avatar: {
    margin: 10,
    backgroundColor: '#8D6E63',
  },
  userName: {
    margin: 10,
  },
  favHeader: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  signOut: {
    cursor: 'pointer',
    color: '#BDBDBD',
    '&:hover': {
      color: '#E0E0E0',
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
    </SvgIcon>
  );
}

function Profile() {
  const classes = useStyles();

  return (
    <div>
      <Link to='/'>
        <HomeIcon className={classes.homeIcon} />
      </Link>
      <CartNavPopper />
      <ProfileNavPopper />
      <div className={classes.root}>
        <h1>Profil</h1>
        <Grid container justify="center" alignItems="center">
          <Avatar className={classes.avatar}>G</Avatar>
          <p className={classes.userName}>Gokhang</p>
        </Grid>
        <p className={classes.signOut}>sign out</p>
        <Grid>
          <p className={classes.favHeader}><strong>Favoriler</strong></p>
          <FavItem />
        </Grid>
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

export default Profile;