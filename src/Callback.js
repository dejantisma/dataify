import './App.css';
import React, { useEffect, useState } from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Callback() {
    if (window.location.hash) {
        var access_token = new URLSearchParams(window.location.hash.substring(1)).get("access_token"); //Puts hash in variable, and removes the # character
        var token_type = new URLSearchParams(window.location.hash.substring(1)).get("token_type");
        if (access_token == null) { //hash but no token
            console.log(window.location.protocol);
            console.log(window.location.host);
            window.location = window.location.protocol + "//" + window.location.host;
        } else { //hash and token
            console.log(access_token);
            console.log(token_type);
        }
    } else { //no hash
        console.log(window.location.protocol);
        console.log(window.location.host);
        window.location = window.location.protocol + "//" + window.location.host;
        console.log('no hash');
    }


    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [topArtists, setArtists] = useState([]);
    const [topArtistsAllTime, setArtistsAllTime] = useState([]);

    // console.log("ACCESS TOKEN: " + access_token);

    useEffect(() => {
        try {
            fetch('https://api.spotify.com/v1/me', {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    setEmail(data.email);
                    setDisplayName(data.display_name);

                })


            fetch('https://api.spotify.com/v1/me/top/artists?time_range=short_term', {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data.items);
                    setArtists(data.items);
                    console.log(topArtists[0].images[0].url);
                }).catch(error => { console.error('Error:' + error) })


            fetch('https://api.spotify.com/v1/me/top/artists?time_range=long_term', {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data.items);
                    setArtistsAllTime(data.items);
                    console.log(topArtistsAllTime[0].images[0].url);

                }).catch(error => { console.error('Error:' + error) })


        }
        catch (error) {
            console.log(error);
        }

    }, []);


    return (
        <div class="mx-auto">
            <Jumbotron>
                <h1>Hello, {displayName}!</h1>
                <p>
                    You logged in successfully. Below is a tour of <em>some</em> of your Spotify data, enjoy!
                </p>
                <p>
                </p>
            </Jumbotron>

            <h3>Over the past month you've really liked these 5 artists..</h3>
            <br></br>
            <Carousel>
                {topArtists.slice(0, 5).map(a =>
                    <Carousel.Item key={a.name}>
                        <img
                            src={a.images[0].url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{a.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                )}
            </Carousel>

            <br></br>
            <h3>But all time, this is your top 5</h3>
            <br></br>

            <Carousel>
                {topArtistsAllTime.slice(0, 5).map(a =>
                    <Carousel.Item key={a.name}>
                        <img
                            src={a.images[0].url}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{a.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                )}
            </Carousel>

        </div>

    );

}



export default Callback;