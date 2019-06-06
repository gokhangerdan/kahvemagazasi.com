import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#795548',
      },
    },
  },
  signInButton: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#FAFAFA',
    backgroundColor: '#795548',
  },
  signUpButton: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
  }
}));

function OutlinedTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-email-input"
        label="Eposta"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Parola"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" className={classes.signInButton}>
        Sign In
      </Button>
      <Button className={classes.signUpButton}>
        Sign Up
      </Button>
    </form>
  );
}

export default OutlinedTextFields;