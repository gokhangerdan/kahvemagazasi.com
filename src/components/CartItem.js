import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    margin: 20,
  },
  img: {
    maxWidth: 150,
    maxHeight: 150,
  },
  removeFromCart: {
    marginTop: 5,
    '&:hover': {
      color: '#FF7043',
      cursor: 'pointer',
    },
  }
}));

function RemoveFromCart(props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/></svg>
    </SvgIcon>
  );
}

function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div>
        <Paper className={classes.paper}>
          <Grid container>
            <Grid item md={11} sm={11} xs={11}>
              <CardActionArea>
                <Grid container>
                  <Grid item md={4} sm={4} xs={12}>
                    <img className={classes.img} alt="complex" src={props.image} /> 
                  </Grid>
                  <Grid item md={8} sm={8} xs={12}>
                    <Typography variant="body2" gutterBottom>
                      {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: {props.id}
                    </Typography>
                    <Typography className={classes.priceTag} variant="subtitle1">
                      <strong>{props.price}</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Grid>
            <Grid item md={1} sm={1} xs={1}>
              <RemoveFromCart className={classes.removeFromCart} />
            </Grid>
          </Grid>
        </Paper>
    </div>
  );
}

export default ComplexGrid;