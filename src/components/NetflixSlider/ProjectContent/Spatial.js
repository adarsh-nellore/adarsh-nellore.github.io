import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Aux from '../Aux'
import './ProjectStyles/Centerpoint.css'
import '../../../../node_modules/video-react/dist/video-react.css';
import '../../../styles/LayoutStyles.css';
import './ProjectStyles/video-react.css';

// Images and videos
import spatialVideo from '../../../assets/spatialmaterials/SpatialDemo.mov'
import spatialIntro from '../../../assets/spatialmaterials/spatialIntro.jpg'
import reverb from '../../../assets/spatialmaterials/reverb.jpg'
import reverb2 from '../../../assets/spatialmaterials/reverb2.png'
import roomModes from '../../../assets/spatialmaterials/roommodes.jpg'
import musicalChart from '../../../assets/spatialmaterials/musicalchart.jpg'
import cube from '../../../assets/spatialmaterials/roommodecube.mov'
import NYvideo from '../../../assets/spatialmaterials/TitleVideo.mp4'
import YouTube from 'react-youtube';
import questionpic from '../../../assets/spatialmaterials/questions.png'
import tyler from '../../../assets/spatialmaterials/tyler.jpg'
import radiohead from '../../../assets/spatialmaterials/radiohead.jpg'
import ReactPlayer from 'react-player'
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
    // color: '#0000ff',
    color: '#222222',
    wordSpacing: "-1px",
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontFamily: 'Arial',
    fontSize: 25,
    textShadow: 'none',
    overflow:'auto'  
  }
}));

export default function Spatial() {
  const classes = useStyles();

  return (
    <Aux>

      <div className="threeFourthWidthContentLeft">
        <h1 className={classes.paper}>
          Spatial Resonance Project: Research and Theory
        </h1>

        <body className={classes.paper}>
          A web application that converts 3-dimensional interior acoustics into music.
          A culmination of research on interior spaces, sound, music, and production.
        </body>

        <body className={classes.paper}>
          Is it possible to use interior spaces as instruments?
          Can we translate interior resonance to music?
          How might neural networks facilitate musical experiences?
        </body>

      </div>
     


      <div>
        <iframe src="https://adarsh-nellore.github.io/SpatialMusicPage1/MusicPage1.html" title="Spatial Music" className="fullRow"></iframe>


      </div>

      
      <video className="fullRow" controls showOnStart autoPlay loop muted>
    <source src={spatialVideo} type="video/mp4"></source>
  </video>

  <div>
        <img src={spatialIntro} alt="Spatial Intro" className="fullRow"></img>
      </div>



      {/* <div >
        <img src={reverb} alt="Reverb 1" className="halfWidthContentLeft" />
      </div>
      <div >
        <img src={reverb2} alt="Reverb 2" className="halfWidthContentRight" />
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
            </mark>
        </body>
      </div>
      </div>     
      
      <div>
        <img class="fullRow" src={roomModes} alt="Room modes"></img>
      </div>

      <div>
        <div className="HalfWidthOneFourthHeightContentLeft">
          <body className={classes.paper}> We consider the three types of room modes: axial, tangential, and oblique.
          Axial modes, in which sound waves only bounce of parallel surfaces (such as floor and ceiling) are the strongest and most influential room modes.
          Tangential modes involve two sets of surfaces and possess half the strength of axial modes.
              Oblique modes involve three or more sets of surfaces and possess the least strength. 
          </body>
        </div> */}

        {/* <div className="HalfWidthOneFourthHeightContentRight">
        <body className={classes.paper}>Interior spaces have fundamental resonances that depend on the inherent physical properties of the room, such as wall stiffness and room dimension.
              <mark>
              Key insight: Interior resonant frequencies correspond to musical notes. Interior resonant frequencies range from 20 Hz to 200 Hz.
              Musical notes start from around 16 Hz.
              This means that interior spaces have inherent musical qualities.
              </mark>
        </body>
        </div>
      </div>

    <div>
        <div>
          <img src={musicalChart} alt="Musical Chart" className="halfWidthContentLeft" />
        </div>
        <div>
          <img src={questionpic} alt="Question" className="halfWidthContentRight" />
        </div>
    </div>

    <video className="fullRowHalfHeight" controls showOnStart autoPlay loop muted>
          <source src={cube} type="video/mp4"></source>
    </video>
      
        
    <div>
        <div className="fullRowHalfHeightTxt">
          <body className={classes.paper}> Studies show that when we listen to music, we often experience time dilation, which is when we perceive the passage of time as slower or faster than it actually is [1]. 
              Studies also show that listening to music influences our perception of physical space even experiencing our surroundings as "choreographed." [1] </body>
        </div> 
    </div>

    <video className="fullRowHalfHeight" controls showOnStart autoPlay loop muted>
        <source src={NYvideo} type="video/mp4"></source>
    </video> */}

    {/* <div className="fullRowHalfHeightTxt">
        <body className={classes.paper}> Music producers often use spatial qualities of interior spaces in music so as to invoke memories and conditioning of those spaces within listeners. 
              These qualities include attributes of interior spaces such as reverberation but also what I call 'natural spatial arrangement.'

              Natural soundscapes are often imbued with '1/f' noise, which is pink noise. Humans often find pink noise, which is denser at lower frequency distributions and generated by natural occurrences such as ocean waves, to be relaxing and comforting </body>
    </div>

<div>
    <YouTube  className ="fullRowHalfHeight" videoId="zDk8pVOtiVY"  />
      <div className="fullRowHalfHeightTxt">
        <h3 className={classes.paper}>
              <mark>Hypothesis of natural spatial arrangement: </mark> The closer a song's frequency distribution is to that of 1/f noise, the more the song will invoke feelings of being in a larger physical space. 
              Let's test this theory out.
        </h3>
      </div>
      </div>           
  <div>
  <div className="fullRowHalfHeightTxt">
    <body className={classes.paper}>
              <mark>Experiment:</mark> Between the songs "New Magic Wand" by Tyler the Creator and "Everything in Its Right Place" by Radiohead, I felt that the latter had a much more 'spatial' arrangement - using 
              more elements that are reminiscent of larger spaces such as reverberation and ambient sound.
              In order to test this theory, I analyzed the frequency distribution of both songs and compared them to the frequency distribution of 1/f noise. 
              The frequency distribution for "Everything in Its Right Place" was more similar to that of 1/f noise as much of the frequency information for this song was at lower frequencies just like the 1/f frequnecy distribution. 
              Therefore, my hypothesis of natural spatial arrangement was proven to be correct. 
    </body>
            </div> 
  </div>
<div>
   */}
 
  {/* <iframe className="halfWidthContentLeft" src ="https://w.soundcloud.com/player/?url=https://soundcloud.com/adarsh-nellore/pink-noise&visual=true&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_playcount=false&callback=true" allow="autoplay" />
  <div >

<img  className="halfWidthContentRight" alt="Pink Noise" src={pinknoise} /> 
</div>


  <iframe className="halfWidthContentLeft" src ="https://w.soundcloud.com/player/?url=https://soundcloud.com/adarsh-nellore/new-magic-wand&visual=true&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_playcount=false&callback=true" allow="autoplay" />
 <div>
  <img  className="halfWidthContentRight" alt="Tyler" src={tyler} /> 
  </div>
 
  <iframe className="halfWidthContentLeft" src ="https://w.soundcloud.com/player/?url=https://soundcloud.com/adarsh-nellore/everything-in-its-right-place-radiohead&visual=true&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_playcount=false&callback=true" allow="autoplay" />
   
  <div>
  <img  className="halfWidthContentRight" alt="Radiohead" src={radiohead} /> 
  </div>
   */}

    {/* <ReactPlayer className="halfWidthContentLeft" controls showOnStart autoPlay loop muted url='https://soundcloud.com/adarsh-nellore/pink-noise' />
    
    <iframe src ="https://w.soundcloud.com/player/?url=https://soundcloud.com/adarsh-nellore/pink-noise&visual=true&buying=false&liking=false&download=false&sharing=false&show_comments=false&show_playcount=false&callback=true" allow="autoplay" />
    </div> */}
  
   
   
           {/* </div>   
  <div className="fullRowHalfHeightTxt">
    <body className={classes.paper}>
      Binaural panning is another spatial technique often used within music that emulates human hearing of physical space by llowing you to position the direction of a signal source so your ears perceive the sound as coming from either in front, behind, above, below, and to the left or right of the listening position when using a stereo output</body>      
  </div>

  <video className="fullRowHalfHeight" controls showOnStart autoPlay loop muted>
      <source src={binaural} type="video/mp4"></source>
  </video> */}
{/* 
  <div className="fullRowHalfHeightTxt">
  

    <body className={classes.paper}>
      <mark>Can music producers make music by designing interior spaces?</mark> 
    </body>
 
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
     
         
    <img className="fullRowHalfHeight" src={userjourney} alt="User journey"/> 


  <video className="fullRow" controls showOnStart autoPlay loop muted>
    <source src={spatialVideo} type="video/mp4"></source>
  </video>

               */}
  {/* <div className="fullRowNohHeight">
    <body className={classes.paper}>Other Questions: 
      Could enhancing the inherent musical qualities of interior spaces influence our experience of their physical qualities?
     Could we create comforting atmospheres facilitated through natural soundscapes using the physical properties of interior spaces?
   </body>       
  </div> */}


</Aux>
  );
}