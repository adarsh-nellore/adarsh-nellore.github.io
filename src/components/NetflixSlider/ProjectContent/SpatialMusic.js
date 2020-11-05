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
import  '../../../../node_modules/video-react/dist/video-react.css';
import './LayoutStyles.css';

import { Player } from 'video-react';

import spatialVideo from '../../../assets/SpatialDemo.mov'

import spatialIntro from '../../../assets/spatialmaterials/spatialIntro.jpg'
import grandCentral from '../../../assets/spatialmaterials/grandcentral.mp4'
import  '../../../../node_modules/video-react/dist/video-react.css';

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
    resizeMode: 'contain',
    

  
    
//*******reduce the padding for the entire page */    

  }
}));
export default function Spatial() {
  const classes = useStyles();
return (
  <Aux>

<div >

<iframe src="../../SpatialMusic/MusicPage1.html" title="Spatial Music"    className="musicstyle"></iframe>
  
  </div>

  {/* <div className={classes.root}>
      <Grid container   
          direction="row"
          color='primary'
          justify="center"
          display="flex"
           spacing={2}></Grid>
 */}

{/* <Grid container item xs={4} spacing={1}>
            <Fade bottom>
              <Paper className={classes.paper}>

              <h1>
                Spatial Resonance Project: Research and Theory
              </h1>

          
               <body>
               Can we translate interior architecture to music?
               </body>

               
               

              </Paper>


            </Fade>
          </Grid> */}

           {/* </div> */}
    </Aux>
  );
}