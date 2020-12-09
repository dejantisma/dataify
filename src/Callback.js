import './App.css';
import React, { Link, useEffect, useState } from 'react';
import { Jumbotron, Carousel, FormGroup, Alert, Form, Button, InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Callback() {
    if (window.location.hash) {
        var access_token = new URLSearchParams(window.location.hash.substring(1)).get("access_token"); //Puts hash in variable, and removes the # character
        var token_type = new URLSearchParams(window.location.hash.substring(1)).get("token_type");
        if (access_token == null) { //hash but no token
            // console.log(window.location.protocol);
            // console.log(window.location.host);
            window.location = window.location.protocol + "//" + window.location.host;
        } else { //hash and token
            // console.log(access_token);
            // console.log(token_type);
        }
    } else { //no hash
        // console.log(window.location.protocol);
        // console.log(window.location.host);
        window.location = window.location.protocol + "//" + window.location.host;
        //    console.log('no hash');
    }


    const handleSelect = (e) => {
        console.log(e);
        // console.log('selected ' + e == 1 ? 'artist' : 'song');
        setButtonSearchTitle(e == 1 ? 'Artist' : 'Song');
    }

    const addTime = (name, type) => {
        if (type === 'track') {
            console.log('ADDING UP ALL THE TIME IN STREAMINGDATAARR FOR ' + name);
            console.log(streamingDataArr);

            var result = streamingDataArr.filter(obj => {
                return obj.trackName === name;
            }

            )

           // console.log(result);
        }else{
            console.log('ADDING UP ALL THE TIME IN STREAMINGDATAARR FOR ' + name);
            console.log(streamingDataArr);
            var result = streamingDataArr.filter(obj => {
              //  console.log(obj.artistName);
                return obj.artistName === name;
            })

          //  console.log(result);

        }


        console.log(result);
        console.log('TOTAL='+result.reduce((a,b) => +a + +b.msPlayed,0));
    }

    const search = (e) => {
        try {
            fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchInput)}&type=${buttonSearchTitle.toLowerCase() === 'song' ? 'track' : buttonSearchTitle.toLowerCase()}`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json",

                }
            }).then(response => response.json())
                .then(data => {
                    if (buttonSearchTitle.toLowerCase() === 'song') {
                        console.log(data.tracks?.items[0]);
                        setSearchReturn(data.tracks?.items[0])
                        console.log('Adding up all ' + data.tracks?.items[0].name + ' streams');
                        console.log('arr in search');
                        console.log(typeof streamingDataArr);
                        addTime(data.tracks?.items[0].name, 'track');


                        // } else if (buttonSearchTitle.toLowerCase() === 'artist') {
                        //     console.log(data.artists?.items[0]);
                        //     setSearchReturn(data.artists?.items[0])
                    } else {
                        console.log(data.artists?.items[0]);
                        setSearchReturn(data.artists?.items[0])
                        console.log('Adding up all ' + data.artists?.items[0].name + ' streams');
                        addTime(data.artists?.items[0].name, 'artist');
                    }
                })
        }
        catch (error) {
            console.log(error);
        }
    }


    const onFileChange = (e) => {
        // console.log("FILE CHANGED "+e);
        // console.log(e.target.files.length+' FILES FOUND');

        for (var i = 0; i < e.target.files.length; i++) {
            let file = e.target.files[i];
            let reader = new FileReader();
            reader.onload = function (e) {
                setStreamingDataArr(oldArr => [...oldArr, ...JSON.parse(reader.result)]);
                console.log("pushed data")
                //console.log(reader.result);
                console.log("streamingdataarr onfilechange");
                console.log(streamingDataArr);

            }

            reader.readAsText(file);
        }


    }

    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [topArtists, setArtists] = useState([]);
    const [topArtistsAllTime, setArtistsAllTime] = useState([]);
    const [buttonSearchTitle, setButtonSearchTitle] = useState('Artist');
    const [searchInput, setSearchInput] = useState('');
    const [searchReturn, setSearchReturn] = useState({});
    const [uploadFile, setUploadFile] = useState();
    const [streamingDataArr, setStreamingDataArr] = useState([]);

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
                    //   console.log(data);
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
                    //  console.log(data.items);
                    setArtists(data.items);
                    //  console.log(topArtists[0].images[0].url);
                }).catch(error => { console.error('Error:' + error) })


            fetch('https://api.spotify.com/v1/me/top/artists?time_range=long_term', {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${access_token}`,
                    "Content-Type": "application/json"
                }
            }).then(response => response.json())
                .then(data => {
                    //   console.log(data.items);
                    setArtistsAllTime(data.items);
                    //   console.log(topArtistsAllTime[0].images[0].url);

                }).catch(error => { console.error('Error:' + error) })


        }
        catch (error) {
            console.log(error);
        }

    }, []);


    return (

        <div>

            <br></br>
            <div class="container">
                <Alert variant="primary">
                    <Alert.Heading>Hello, {displayName}!</Alert.Heading>
                    <p fontSize="36">
                        You logged in successfully. Below is a tour of <em>some</em> of your Spotify data, enjoy!</p>
                </Alert>
            </div>
            {/* 
            <Jumbotron>
                <h1>Hello, {displayName}!</h1>
                <p>
                    You logged in successfully. Below is a tour of <em>some</em> of your Spotify data, enjoy!
                </p>
                <p>
                </p>
            </Jumbotron> */}

            <h1 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 200 }}>Artists</h1>
            <h3 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 40 }}>Recently..</h3>
            <br></br>
            <Carousel>
                {topArtists?.slice(0, 5).map(a =>
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
            <h3 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 40 }} >All time..</h3>
            <br></br>

            <Carousel>
                {topArtistsAllTime?.slice(0, 5).map(a =>
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

            <hr></hr>
            <h1 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 200 }}>Upload</h1>

            <div class="container">
                <Alert variant="success">
                    <Alert.Heading>Upload your Spotify data</Alert.Heading>
                    <p>
                        Unfortunately, the Spotify Web API is limited in the data that it provides. You saw how we could use it above, but unfortunately the only sort of history or playback accessible via the API is the last 50 tracks. You can access all time personalization like we did above, but there's no detail in terms of how many tracks streamed or hours or what tracks exactly. To view more data you have to request it from Spotify via https://www.spotify.com/us/account/privacy/,
                        you're able to download your Spotify data over the last year including streaming history. Keep in mind once you request your data it may take a few days to process before you can download it.</p>
                    <hr />
                    <p className="mb-0">
                        Upload your data now (<code>StreamingHistory#.json</code>, you can select multiple). Each file has 10,000 streams max <span aria-label="open face" role="img">😮</span> Then, search for a song or artist and we'll give you some details!
                    </p>
                </Alert>
            </div>


            <div className="container">
                <Form>
                    <Form.Group>
                        <Form.File id="uploadFile" multiple onChange={onFileChange} />
                    </Form.Group>
                </Form>
            </div>

            <h1 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 200 }}>Search</h1>

            <div class="container">

                <InputGroup size="lg" className="mb-3">
                    <DropdownButton
                        as={InputGroup.Prepend}
                        variant="outline-secondary"
                        title={buttonSearchTitle}
                        id="input-group-dropdown-1"
                        onSelect={handleSelect}
                        size="lg"
                    >
                        <Dropdown.Item eventKey="1" >Artist</Dropdown.Item>
                        {//  <Dropdown.Item eventKey="2">Album</Dropdown.Item> 
                        }
                        <Dropdown.Item eventKey="2">Song</Dropdown.Item>
                    </DropdownButton>

                    <FormControl aria-describedby="basic-addon1" onChange={e => setSearchInput(e.target.value)} />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={search}>Search</Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>

        </div>

    );

}


export default Callback;