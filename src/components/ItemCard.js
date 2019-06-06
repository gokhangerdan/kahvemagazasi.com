import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SvgIcon from '@material-ui/core/SvgIcon';

import FavCheck from './FavCheck';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#FAFAFA',
  },
  addCart: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
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

  return (
    <Card className={classes.card}>
      <FavCheck checkedStatus={props.checkedStatus} />
      <CardActionArea>
        <AddCart className={classes.addCart} />
      </CardActionArea>
      <CardMedia
        component="img"
        alt={props.name}
        image={props.image}
        title={props.name}
      />
      <CardActionArea>
        <CardContent>
            <h1 style={{textAlign: 'center'}}>{props.name}</h1>
            <p style={{textAlign: 'center'}}>{props.description}</p>
            <p style={{textAlign: 'center', color: '#BDBDBD'}}>ID: {props.id}</p>
            <p style={{textAlign: 'center', fontSize: 20}}><strong>{props.price}</strong></p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ImgMediaCard;