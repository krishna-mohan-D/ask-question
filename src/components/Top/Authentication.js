import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import SignUp from './SignUp'
import Login from './Login'
import Container from '@material-ui/core/Container';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '1500px',
    height: '400px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Authentication() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
        <Grid container spacing={3}>
            <Grid item xs={6}>
               {/* <h2 id="simple-modal-title">Text in a modal</h2> */}
               <SignUp/>
            </Grid>
        
           <Grid item xs={6}>

             <p id="simple-modal-description">
               Already SignUp ?
              </p>
              <Login/>
           </Grid>

         {/* <Login /> */}
      </Grid>

    </div>
  );

  return (
    <Container>
    <div>
      <button type="button" onClick={handleOpen}>
        login
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
    </Container>
  );
}

