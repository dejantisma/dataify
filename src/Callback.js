import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Callback() {
    if (window.location.hash) {
        var access_token = new URLSearchParams(window.location.hash.substring(1)).get("access_token"); //Puts hash in variable, and removes the # character
        var token_type = new URLSearchParams(window.location.hash.substring(1)).get("token_type");
       //console.log(new URLSearchParams(hash).get("access_token"));
      //alert (hash);

      if(access_token == null){
          window.location = "http://"+window.location.host;
      }
      console.log(access_token);
      console.log(token_type);
    } else {
        console.log('no hash');
    }



    return (
        <div className="App">

            <h1>
                CALLBACK!!!
      </h1>

        </div>
    );
}


export default Callback;