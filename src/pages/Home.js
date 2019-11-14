import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

import SearchBar from '../components/SearchBar';
import MarketItems from '../components/MarketItems';
import CartNavPopper from '../components/CartNavPopper';
import ProfileNavPopper from '../components/ProfileNavPopper';

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
        <img id='mobilehide' className={classes.heroImage} width={75} height={100} alt='' src='https://i.pinimg.com/originals/1e/27/09/1e2709b9ab3be00ada0bb38e3b723bb9.png'></img>
        <h1 className={classes.heroHeader}>Kahve Çekirdeği Mağazası</h1>
        <p className={classes.heroCaption}><strong style={{color: '#29B6F6'}}>React.js</strong> & <strong style={{color: '#FF7043'}}>MaterialUI</strong> ile yapılmış bir e-ticaret sitesi teması.</p>
        <SearchBar />
      </div>
      <MarketItems />
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
