import React, { useState ,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Comment from './Comment'

const useStyles = makeStyles({
  root: {
      marginTop: '70px',
    minWidth: 275,
    backgroundColor: 'ghostwhite',
    height: '400px',
    overflow: 'auto',

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: 'black',
    marginBottom: '30px'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [answers, setAnswers] = useState([]);

  useEffect(()=>{
      axios.get('localhost:3000')
      .then(response => {
        setAnswers({answers: response.data})
      })
  } ,[])

  return (
    <Container >  
      {answers.length ? 
       
        answers.map(answer => 
              <Card key={answer.id} className={classes.root}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                         <h3>{answer.question}</h3>
                    </Typography>
                    <Typography variant="h5" component="h2">
                          <p>{answer.answer}</p>
                    </Typography>
                    
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Learn More</Button> */}
                    
                    {answer.login ? 
                    <Comment answer={answer}/> : null
                    }

                   </CardActions>
              </Card>
          
          )
       : null
    }
      <Card  className={classes.root}>
        <CardContent>
          <Typography variant="h5" className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day            Word of the Day
            Word of the Day
            Word of the Day
            Word of the Day
            Word of the Day
            Word of the Day
            Word of the Day
            Word of the Day
            Word of the Day
         
            Word of the Day

          </Typography>
          <Typography  component="h2">
          asfadasfadsfsdf sfs
           of Pakistani Islamists had clashed with police earlier this week in protest against the arrest of their leader ahead of rallies denouncing French cartoons depicting the Prophet Mohammad.

For Muslims, depictions of the Prophet are blasphemous.

The diplomatic source added on Thursday that a message had been sent overnight to French citizens and companies following a threat by a hardline Islamist group to target French interests.

           of Pakistani Islamists had clashed with police earlier this week in protest against the arrest of their leader ahead of rallies denouncing French cartoons depicting the Prophet Mohammad.

For Muslims, depictions of the Prophet are blasphemous.


The diplomatic source added on Thursday that a message had been sent overnight to French citizens and companies following a threat by a hardline Islamist group to target French interests
           </Typography>
        </CardContent>
        <CardActions >
          
          {/* <Button size="small">Learn More</Button> */}
          {true  ?
          <Comment /> : null
          }
        </CardActions>
      </Card>
    </Container>
  );
}
