import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import ProfileFavCheck from './ProfileFavCheck';

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FAFAFA',
    textAlign: 'left',
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  addCart: {
    '&:hover': {
      color: '#29B6F6',
      cursor: 'pointer',
    },
  },
});

function AddCart(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>								
    </SvgIcon>
  );
}

function ImgMediaCard(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item md={3} sm={3} xs={3}>
          <Avatar alt="" src="https://media3.tchibo-content.de/newmedia/art_img/MAIN_HD/ff16971b15e86f24/barista-espresso-500g-cekirdek-kahve.jpg" className={classes.bigAvatar} />
        </Grid>
        <Grid item md={7} sm={7} xs={7}>
          <CardActionArea>
            <p>Barista Espresso Çekirdek Kahve 500g</p>
            <p><strong>64,95 TL</strong></p>
          </CardActionArea>
        </Grid>
        <Grid item md={2} sm={2} xs={2}>
          <ProfileFavCheck checkedStatus={true} />
        </Grid>
      </Grid>
    </Card>
  );
}

export default ImgMediaCard;