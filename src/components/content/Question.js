import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  // },
   form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginLeft: '320px'
  },
  extend: {
     width: '90%',
     height: '50px',
    //  padding: '30px',
     marginLeft: '400px',
     marginTop: '20px'
    // marginRight: '1px'

  },
  root: {
    //  minWidth: 275,
     marginTop: '40px',
     color: 'red',
     backgroundColor: 'ghostwhite',
     marginLeft: '483px',

  },
  bullet: {
    // display: 'inline-block',
    // margin: '0 2px',
    // transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container component="main" maxWidth="30px">
        <Card className={classes.root}>
          <CardContent>
          
            
            <div className={classes.paper}>
              
              <form className={classes.form} noValidate>
                    <Grid container >
                        <Grid sm >
          
                              <TextField
                                className={classes.extend}
                                variant="outlined"
                                margin=""
                                required
                                  
                                id=""
                                label=""
                                name=""
                                autoFocus
                                size="small"
                              />
                        </Grid>      
                        <Grid item  sm>
                
                              <Button
                              type="submit"
                            
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              >
                                post
                              </Button>
                        </Grid>  
                  </Grid>
              </form>
            </div>
            
         </CardContent>
          
        </Card>
    </Container>
  );
}


