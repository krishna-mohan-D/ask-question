import logo from './logo.svg';
import './App.css';
import  Navbar from  './components/Top/Navbar'
import Container from '@material-ui/core/Container';
import  Question from './components/content/Question'
function App() {
  return (
    <div className="">
      {/* <Container maxWidth="xl"> */}
            <Navbar/>
            <Question/>
      {/* </Container>     */}
    </div>
  );
}

export default App;
