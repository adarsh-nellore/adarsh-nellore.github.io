import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import image from '../../../assets/AI_Image2_2.jpg'
import Fade from 'react-reveal/Fade';
import Aux from '../Aux'
import './Centerpoint.css'
// import ParallaxProvider from 'react-scroll-parallax'
import { Parallax } from 'react-scroll-parallax';
import resonanceImage from '../../../assets/Resonance.png'
//import '../../../../node_modules/video-react/dist/video-react.css';
import '../../../../node_modules/video-react/dist/video-react.css';
import './LayoutStyles.css';


import { Player } from 'video-react';

import spatialVideo from '../../../assets/SpatialDemo.mov'

import spatialIntro from '../../../assets/spatialmaterials/spatialIntro.jpg'
import grandCentral from '../../../assets/spatialmaterials/grandcentral.mp4'
//import '../../../../node_modules/video-react/dist/video-react.css';
import './video-react.css';

import reverb from '../../../assets/spatialmaterials/reverb.jpg'
import reverb2 from '../../../assets/spatialmaterials/reverb2.png'

import roomModes from '../../../assets/spatialmaterials/roommodes.jpg'

import musicalChart from '../../../assets/spatialmaterials/musicalchart.jpg'

import Codepen from "react-codepen-embed";

import cube from '../../../assets/spatialmaterials/roommodecube.mov'

import NYvideo from '../../../assets/spatialmaterials/TitleVideo.mp4'

import YouTube from 'react-youtube';

import questionpic from '../../../assets/spatialmaterials/questions.png'

import tyler from '../../../assets/spatialmaterials/magicwand.mp3'

import ReactPlayer from 'react-player'

import tylergraph from '../../../assets/spatialmaterials/tyler.jpg'

import radiograph from '../../../assets/spatialmaterials/radiohead.jpg'

import pinknoise from '../../../assets/spatialmaterials/pinknoise.jpg'

import binaural from '../../../assets/spatialmaterials/Binaural.mp4'

import userjourney from '../../../assets/spatialmaterials/userjourney.jpg'







const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: '#222222',
    // marginLeft: "2vw",
    // marginRight: "2vw",
    wordSpacing: "-1px",
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontFamily: 'Courier New',
    fontSize: 12,
    textShadow: 'none',
    overflow:'auto'




    //*******reduce the padding for the entire page */    

  }
}));

export default function Spatial() {
  const classes = useStyles();

 

  return (
    <Aux>

      <div className="halfWidthContentLeft">
        <h1 className={classes.paper}>
          Spatial Resonance Project: Research and Theory
              </h1>

        <body className={classes.paper}>
          Can music producers make music by designing interior spaces?
          Can we translate interior architecture to music?
          How might neural networks facilitate musical experiences?
               </body>



      </div>
      <div>

        <img src={spatialIntro} className="halfWidthContentRight"></img>
      </div>


      <div>

        {/* <iframe src="../../../../SpatialMusicPage1/MusicPage1.html" title="Spatial Music" className="musicApp"></iframe> */}


        <iframe src="https://adarsh-nellore.github.io/SpatialMusicPage1/MusicPage1.html" title="Spatial Music" className="fullRow"></iframe>

      </div>


      <div >
        <img src={reverb} className="halfWidthContentLeft" />
      </div>
      <div >
        <img src={reverb2} className="halfWidthContentRight" />
      </div>

      <div>

        <div className="HalfWidthOneFourthHeightContentLeft">
        <body className={classes.paper}>Reverberation exists within every interior space we frequent. Reverberation is persistence of sound after the sound is produced.
          Sound waves originate from an acoustic source and reflect off walls of interior spaces and are then absorbed by various objects within a room: air, furniture, people.
                  </body>
        </div>

        <div className="HalfWidthOneFourthHeightContentRight">
          <body className={classes.paper}>Interior spaces have fundamental resonances that depend on the inherent physical properties of the room, such as wall stiffness and room dimension.
              <mark>
              If the sound waves that are released from an acoustic source within the room have audio frequencies close to room resonances, the amplitude of the sound significantly increases.
              Room modes are the collection of room resonances.
              </mark></body>

        </div>
      </div>

        
       
     

     {/*  <div>
          <Player className="fullRow"
            playsInline


            src={cube} ></Player></div> */}
     
      <div>

        <img src={roomModes} ></img>
      </div>


      <div>
        <div className="HalfWidthOneFourthHeightContentLeft">
        <body className={classes.paper}> We consider the three types of room modes: axial, tangential, and oblique.
          Axial modes, in which sound waves only bounce of parallel surfaces (such as floor and ceiling) are the strongest and most influential room modes.
          Tangential modes involve two sets of surfaces and possess half the strength of axial modes.
              Oblique modes involve three or more sets of surfaces and possess the least strength. </body>
        </div>

        <div className="HalfWidthOneFourthHeightContentRight">
        <body className={classes.paper}>Interior spaces have fundamental resonances that depend on the inherent physical properties of the room, such as wall stiffness and room dimension.
              <mark>
              Key insight: Interior resonant frequencies correspond to musical notes. Interior resonant frequencies range from 20 Hz to 200 Hz.
              Musical notes start from around 16 Hz.
              This means that interior spaces have inherent musical qualities.
              </mark></body>

        </div>
      </div>


<div>
      

        <div>
          <img src={musicalChart} className="halfWidthContentLeft" />
        </div>
        <div>
          <img src={questionpic} className="halfWidthContentRight" />
        </div>

</div>

        <video className="fullRowHalfHeight" controls showOnStart autoPlay loop muted>
          <source src={cube} type="video/mp4"></source>
        </video>
      
        
        <div>
        <div className="fullRowOneFourthHeight">
        <body className={classes.paper}> Studies show that when we listen to music, we often experience time dilation, which is when we perceive the passage of time as slower or faster than it actually is [1]. 
              Studies also show that listening to music influences our perception of physical space even experiencing our surroundings as "choreographed." [1] </body>
        </div>

        
      </div>

      <video className="fullRowHalfHeight" controls showOnStart autoPlay loop muted>
          <source src={NYvideo} type="video/mp4"></source>
        </video>

        <div className="fullRowOneFourthHeight">
        <body className={classes.paper}> Music producers often use spatial qualities of interior spaces in music so as to invoke memories and conditioning of those spaces within listeners. 
              These qualities include attributes of interior spaces such as reverberation but also what I call 'natural spatial arrangement.'

              Natural soundscapes are often imbued with '1/f' noise, which is pink noise. Humans often find pink noise, which is denser at lower frequency distributions and generated by natural occurrences such as ocean waves, to be relaxing and comforting </body>
        </div>

        
     

        <YouTube  className ="fullRowHalfHeight" videoId="zDk8pVOtiVY"  />
        <div className="fullRowNohHeight">
        <h3 className={classes.paper}>
              <mark>Hypothesis of natural spatial arrangement: </mark> The closer a song's frequency distribution is to that of 1/f noise, the more the song will invoke feelings of being in a larger physical space. 
              Let's test this theory out.</h3></div>
              

<div className="fullRowNohHeight">
<body className={classes.paper}>
              <mark>Experiment:</mark> Between the songs "New Magic Wand" by Tyler the Creator and "Everything in Its Right Place" by Radiohead, I felt that the latter had a much more 'spatial' arrangement - using 
              more elements that are reminiscent of larger spaces such as reverberation and ambient sound.
              In order to test this theory, I analyzed the frequency distribution of both songs and compared them to the frequency distribution of 1/f noise. 
              The frequency distribution for "Everything in Its Right Place" was more similar to that of 1/f noise as much of the frequency information for this song was at lower frequencies just like the 1/f frequnecy distribution. 
              Therefore, my hypothesis of natural spatial arrangement was proven to be correct. 
</body>
             
              </div>

              <div className="halfWidthContentLeft">
                <ReactPlayer url='https://soundcloud.com/adarsh-nellore/pink-noise' />
                </div>
              
              <div className="halfWidthContentRight">
             
              <img src={pinknoise} /> 
               </div>
               <div className="fullRowOneFourthHeight">
<body className={classes.paper}>
             Binaural panning is another spatial technique often used within music that emulates human hearing of physical space by llowing you to position the direction of a signal source so your ears perceive the sound as coming from either in front, behind, above, below, and to the left or right of the listening position when using a stereo output</body>
             
</div>

<video className="fullRowHalfHeight" controls showOnStart autoPlay loop muted>
          <source src={binaural} type="video/mp4"></source>
        </video>

        


<div className="fullRowHalfHeightTxt">

<body className={classes.paper}>
<mark>Can music producers make music by designing interior spaces?</mark> </body>
<body className={classes.paper}>
            To this end, I created a prototype web application of this spatial production tool.
          </body>
          <body className={classes.paper}>   
  1) The user firsts changes the dimension of a simple geometric volume (cube) by click and dragging the cube.
          
          </body>
          <body className={classes.paper}>2) Based on the dimensions of the cube, the room modes are calculated.
          
         </body>

          <body className={classes.paper}>3) When the user presses play, resonant frequencies within the cube are fed into a neural network that corresponds them to musical notes. The music will then play.
 </body>
 <body className={classes.paper}>4) To experience the space the user has just designed, they must navigate to a new window. There, they experience the space they have created as a noise source among other noise sources.
                Binaural panning and reverberation, which is high if the room designed was large and low if the room designed was small, are also applied within this window. 
                </body>

          
</div>



      
<div className="fullRow">
             
             <img src={userjourney} /> 
              </div>

              <video className="fullRow" controls showOnStart autoPlay loop muted>
          <source src={spatialVideo} type="video/mp4"></source>
        </video>

              
        <div className="fullRowOneFourthHeight">
<body className={classes.paper}>Other Questions: 

Could enhancing the inherent musical qualities of interior spaces influence our experience of their physical qualities?
Could we create comforting atmospheres facilitated through natural soundscapes using the physical properties of interior spaces?
          </body>
          
</div>
    </Aux>
  );
}