import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import React, { useEffect, useState } from "react";


function About() {

  var json = JSON.stringify({
    "inferences": [
      "1P_Custom_Discovery_Streamers", "1P_Custom_Passionate_Curators",
      "1P_Custom_T-Mobile_Switchers",
      "1P_Custom_Wrapped2019",
      "1P_Custom_iPhone_11_Users",
      "2P_HBO_NOW Lapsed_12March2020_US",
      "2P_HBO_NOW Subscribers_12March2020_US",
      "2P_HBO_Neustar_ NSR HBO ALL_US",
      "2P_HBO_SubsSegment_20180919_US",
      "2P_Nexcare_IRI > Buyers Of First Aid Products Within Last 52W > Verified_10July2020_US",
      "2P_Nexcare_IRI > Pain and Allergy Relief Purchasers Last 52W at Walgreens > Proscore_10July2020_US",
      "2P_Nexcare_IRI > Pain and Allergy Relief Purchasers Last 52W at Walmart > Proscore_10July2020_US",
      "2P_Starbucks_FY20_Winter_Display_sr_target_17Dec2019_US",
      "2P_Starbucks_Non-SR Control Group Suppression_29April2020_US",
      "2P_Starbucks_SR Occasionals_29April2020_US",
      "2P_Starbucks_SR Summer Products_29April2020_US",
      "3P_Affluent Households_IT",
      "3P_Alcohol Consumers_CA",
      "3P_Alcohol Consumers_ES",
      "3P_Alcohol Consumers_FR",
      "3P_Alcohol Consumers_IT",
      "3P_Alcohol Consumers_US",
      "3P_AmazonBlackFriday_FR",
      "3P_American_Steakhouse lovers_IT",
    ]
  });

  return (
    <div className="App">

      <h1 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 200 }}>About</h1>

      <div className="container">
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>

          If you're reading this, hopefully you got to play with your Spotify data a little!
          The purpose of this web-app was to not only show you what cool things could be built
          using your streaming data but also to bring attention to how powerful and important
          big data is. I’ll talk more about the data that Spotify collects from you, as you may
          have seen in the ‘MyData’ folder (if you requested & downloaded it from them). If you didn’t
request it yet you can do so <a target="_blank" rel="noopener noreferrer" href="https://www.spotify.com/us/account/privacy/">here</a> and if you’re
 waiting for them to process it, no worries, you can follow along!

</p>
        {/* <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
</p> */}
        <br></br>
        <br></br>

        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          According to Spotify, this download contains information about “your playlists, streaming history, searches,
          a list of items saved in Your Library, the number of followers you have, the number of accounts you follow,
          the names of the artists you follow, and your payment and subscription data.” A more complete breakdown can be found
<a target="_blank" rel="noopener noreferrer" href="https://support.spotify.com/us/article/understanding-my-data/"> here</a> where it tells you
exactly what each JSON file contains. The main thing that I concerned myself with was streaming history.
</p>

        <br></br>
        <img src={process.env.PUBLIC_URL + '/img1.png'} />
        <br></br>
        <br></br>
        <br></br>

        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          I was a little upset that you could only get the data for the past year.
          However, it is possible to get extended streaming history along with
          ‘technical log information’ by contacting their customer service,
          I was able to chat with CS and I got an email that they received my data
          request but I’m still waiting on that to process. The first time that I requested my data, it only took
          3 days to process although they say it can take up to 30 days. At the time of writing this, they recently
          did their Spotify Wrapped annual review for 2020, so I imagine they’re receiving more requests than usual.
</p>
        <br></br>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          Anyways, you might be thinking “no big deal that Spotify tracks all my streaming data, I assumed that anyways.” Well yeah, that’s
          how they offer you playlists and recommendations based on your listening. But that’s not all that data’s being used for. Keep reading.
</p>
        <br></br>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          In 2014, Spotify acquired music intelligence agency The Echo Nest. They specialize in curating personalized music recommendations
          and playlists using algorithms and AI. This company is based in Massachusetts just outside of Boston in Somerville, which is near
          me, so I thought that was cool. The Echo Nest had previously offered an API to Rdio (Pandora), iHeartRadio, and Rhapsody to help these
          companies with listening patterns.  This is essentially the core of the data collection that Spotify does. For more technical detail on the algorithms
themselves, this <a target="_blank" rel="noopener noreferrer" href="https://notes.variogr.am/2012/12/11/how-music-recommendation-works-and-doesnt-work/"> article</a> is a really good read from the former CTO & co-founder of The Echo Nest,
Brian Whitman.
</p>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          A quick side note, Brian is now the CEO of his new company ‘Canopy’ which is a ‘discovery app’ to deliver you media but here’s the catch: your data is private🤔.
</p>

        <img className="container" src={process.env.PUBLIC_URL + '/img2.png'} />

        <br></br>
        <br></br>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          Learn more about Canopy on their website <a target="_blank" rel="noopener noreferrer" href="https://canopy.cr/tonic">https://canopy.cr/tonic</a>, I just figured it was funny and ironic
that they had personalized recommendations but the data wasn’t being sold.
</p>

        <br></br>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          Wait, what do you mean sold? My data is being sold?
Well, yes, kind of. According to Spotify’s statement to Business Insider <a target="_blank" rel="noopener noreferrer" href="https://www.businessinsider.com/spotify-pandora-tinder-apps-sell-anonymized-data-2017-5#spotify-2">here</a>,

</p>

        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          “The customer data we share with trusted partners simply helps us to tailor
          improved experiences to our users, allows us to deliver relevant content and
          ads to users on the free service, and to build new and innovative products for
          the future. Spotify does not sell customer data, and the privacy and security of our customers' data remains
          our highest priority.”
</p>

        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>

          So, they don’t technically sell customer data.. but share it with trusted partners.. to make money? That’s quite literally what they said.
</p>


        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <hr></hr>
        <br></br>

        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          So I dug a little deeper and found their advertising subdomain: <a target="_blank" rel="noopener noreferrer" href="https://ads.spotify.com/en-US/">https://ads.spotify.com/en-US/</a>. <a target="_blank" rel="noopener noreferrer" href="https://spotifyforbrands.com">https://spotifyforbrands.com</a> also
redirects to this. We shouldn’t be surprised that Spotify offers ads, any company even those with a fraction of the userbase as
Spotify does since these corporations spend millions on ads in hopes of a return. But perhaps you would be surprised on how the
audience targeting works.

</p>

        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          Spotify promotes the following to incentivize companies to run ads with them.
</p>
        <br></br>
        <img className="container" src={process.env.PUBLIC_URL + '/img3.png'} />

        <br></br>
        <br></br>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          What car your driving, what type of phone you have, if you’ve streamed on an Echo Dot or a computer,
          all of these can be important to corporations looking to sell you something. And of course, Spotify offers listening behaviors.
</p>
        <br></br>


        <img className="container" src={process.env.PUBLIC_URL + '/img4.png'} />
        <br></br>
        <br></br>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          Listening behaviors to me is the biggest one here because it’s something that Spotify can manipulate on their app. Lots of people
          fear that Spotify can promote music based on a mood that they want you to feel. The author
 <a target="_blank" rel="noopener noreferrer" href="https://bigthink.com/technology-innovation/is-spotify-spying-on-you?rebelltitem=1#rebelltitem1 "> here </a>
 says “imagine you walk into a store, which has a deal with Amazon to track what items you regularly
purchase. As you approach that department, the store checks in with Spotify to discover your most played
songs. Since your spending habits are higher than other customers, the store's soundtrack immediately
updates to reflect your favorites. This little dopamine boost ensures an open wallet.” Doesn’t seem likely
to me, but not super far fetched either. Just shows how powerful this data truly can be. Of course, using
all your streaming data they’re able to categorize your habits into categories like “Chill,” Focus/Study,”
“Cooking,” and more, which are then valuable to the advertisers. We saw how this data collection works a
little earlier (AI via The Echo Nest). That $100m acquisition from Spotify 6 years ago must’ve paid off big time.
</p>

        <br>
        </br>
        <br>
        </br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          The last thing I’ll touch on is off-platform behaviors that Spotify offers to brands and advertisers.
</p>



        <img className="container" src={process.env.PUBLIC_URL + '/img5.png'} />

        <br></br>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          If you downloaded your data, there’s a file called <code>Inferences.json</code> in <code>MyData.zip</code>.
 If you don’t have a copy here’s an example of what it could like (mine was 1200 lines for what it’s worth).

</p>
        <br></br>
        <div><pre>{json}</pre></div>

        <br></br>

        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          This is only a fraction of my file, remember I had TWELVE HUNDRED lines. The 1P, 2P,
          and 3P stand for first, second, and third party. 1st party should be data that they get
          from you directly, whereas third party could be from information they buy or through their partners.
          In my case, I recall my Spotify account being compromised (I’d always find random songs
          on history or playback) so I imagine some of my information is messed up, but I definitely
          do drink Starbucks and alcohol and have an iPhone, soooo…

</p>

        <hr></hr>
        <br></br>
        <hr></hr>
        <br></br>
        <p style={{ fontFamily: 'Taviraj', textAlign: "center", fontSize: 22 }}>
          I hope you enjoyed this web-app to see your Spotify playbacks and also learned a little bit on how corporations,
          advertising, big data, and more works. Not necessarily just Spotify since they’re
          definitely not the only party doing this (although they’re becoming one of the biggest due
          to the size of their userbase). There's even more data that Spotify is required to give you via the GDPR, download it now and take a look! I linked a lot of outside resources in here but here’s one
that also goes into  much more detail than I ever could: <a href="https://thebaffler.com/downstream/big-mood-machine-pelly">https://thebaffler.com/downstream/big-mood-machine-pelly.</a>

        </p>

      </div>

      <h1 style={{ fontFamily: 'Nerko One', textAlign: "center", fontSize: 200 }}>The End</h1>



    </div>
  );
}


export default About;