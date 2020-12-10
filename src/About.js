import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import React, { useEffect, useState } from "react";


function About() {

 

    return (
      <div className="App">
       
       <h1 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 200 }}>About</h1>

       <div className="container">
<p>

If you're reading this, hopefully you got to play with your Spotify data a little! The purpose of this web-app was to not only show you what cool things could be built using your streaming data, but bring attention to how powerful and important big data is. I'll ana

</p>
<p>
2) 8.17
Cues that were missed or ignored in the Therac-25 case by the manufacturer were having error messages
not really mean anything on the console. Obviously, there were limitations due to the hardware (not much
memory back then) but at the very least there should be a manual that describes error codes that aren’t
helpful. Cues that were missed from the users was failure to stop the operator due to an error. For
example, some errors could happen and the machine would pause, but the operator could continue to turn
on the electron beam by pressing a single button. Obviously internal code issues were the problem here,
but allowing the operator to be lazy and bypass serious errors are a major concern.
</p>

<p>
3) 8.29
Risk management “includes being alert to cues that might indicate an error or problem,” this was a huge
issue in the Therac-25 case as described in 8.17. Both the Therac-25 and Challenger cases had a lot of
complacency by the operators. They couldn’t prove that the system was safe or not. In the Therac-25 case
a worker went to an office party during the appointment and overdid the treatment, and in the Challenger
case the cold weather was an issue so there’s a lot of real-world things that happen that aren’t accounted
for. 
</p>
</div>
    
  
  
      </div>
    );
  }

  
export default About;