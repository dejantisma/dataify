import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About';
import { useHistory } from 'react-router-dom';
import Callback from './Callback';


function App() {
  return (
    <Router>


      <div className="App">
        <Navbar bg="success" variant="dark">
          <Navbar.Brand href="/home">Dataify</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="https://github.com/dejantisma">GitHub</Nav.Link>
          </Nav>




        </Navbar>

     

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/home" component={Home}></Route>

          <Route path="/about" component={About}></Route>
          <Route path="/callback" component={Callback}></Route>
        </Switch>

      </div>

    </Router>
  );
}


const Home = () => 
 
(
  <div>
    <br></br>
    <br></br>
    <h1>Welcome!</h1>
    <h2>Let's see your Spotify data.</h2>
    <br></br>
    <Button onClick={openLogin}>
  Login With Spotify
    </Button>
   {/* <Nav.Link href={window.open`https://accounts.spotify.com/authorize?scope=user-read-private%20user-read-email&client_id=${encodeURIComponent(client_id)}&response_type=token&redirect_uri=${encodeURI(redirect_uri)}`}>Yooo</Nav.Link> */}


  </div>
);

async function getAccessToken(e){


  await openLogin();
  console.log('finishing getAccessToken');

  if(window.location.hash){
    //got access
    console.log('got hash');
      }else{
    console.log('no hash');
      }
  
}
async function openLogin(e){
  var URL = `https://accounts.spotify.com/authorize?client_id=${encodeURIComponent(client_id)}&response_type=token&redirect_uri=${encodeURI(redirect_uri)}`;
  window.location = URL; 
  console.log("finishing openLogin");
}

var client_id = '3f5e2b54cd754feaac87cc017616ba7e'; // Your client id
var client_secret = 'CLIENT_SECRET'; // Your secret
var redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri
var scopes = 'user-read-private user-read-email';



export default App;
