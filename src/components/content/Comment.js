import React, { useState } from 'react';
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
import axios from 'axios';

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
     width: '80%',
     height: '50px',
    //  padding: '30px',
     marginLeft: '400px',
     marginTop: '20px'
    // marginRight: '1px'

  },
  root: {
     minWidth: 5,
    //  width: '440px',
     marginTop: '20px',
     paddingBottom: '100px',
    //  color: 'red',
    //  backgroundColor: 'ghostwhite',
    //  marginLeft: '483px',
    height: '30px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function Comment(props) {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const url = "";

  const [data, setData] =  useState({
      question: ""
  })

  function handle(e){
    const newData = {...data};
    newData[e.target.id]  = e.target.value;
    setData(newData);
    console.log('dat', data);
  }

  function  submit(e){
     e.prevent.default();
     axios.post(url , {
       questionId: props.answer.id,
       question: data.question
     })
     .then(res => {
       console.log(res.data)
     })
   
  }
 
  return (
    <Container component="main" >
      
        <Card className={classes.root}>
        {/* <h1>ask a question</h1> */}

          <CardContent>
          
            
            <div className={classes.paper}>
              <form className={classes.form} noValidate onSubmit={(e) => submit(e)}>
                    <Grid container >
                        <Grid xs >
                          
                              <TextField
                                className={classes.extend}
                                variant="outlined"
                                margin=""
                                required
                                  
                                id="question"
                                label=""
                                name=""
                                autoFocus
                                size="small"
                                onChange={(e) => handle(e)}
                                value={data.question}
                                
                              />
                        </Grid>      
                        <Grid item  xs>
                
                              <Button
                              type="submit"
                            
                              variant="contained"
                              color="primary"
                              className={classes.submit}
                              >
                                Comment
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


