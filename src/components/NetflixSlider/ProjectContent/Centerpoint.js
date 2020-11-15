import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Aux from '../Aux'
import './Centerpoint.css'
// import ParallaxProvider from 'react-scroll-parallax'
// import { Parallax } from 'react-scroll-parallax';
import introImage from '../../../assets/centerpointmaterials/sitting.jpg';
import centerpointMovie from '../../../assets/centerpointmaterials/centerpoint.mov'
import chairDiagram from '../../../assets/centerpointmaterials/chairdiagram2.jpg';
import centerpointWhole from '../../../assets/centerpointmaterials/centerpointwhole.jpg'
import { Player } from 'video-react'
import '../../../styles/LayoutStyles.css';

//import  '../../../../node_modules/video-react/dist/video-react.css';
import  './video-react.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "justify",
    color: '#222222',
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
export default function Edwards() {

 /*  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
 */
  const classes = useStyles();
  return (
    
    <Aux>

      <div className="oneFourthWidthContentLeft">
        <h1 className={classes.paper}>
        The Centerpoint Experience
        </h1>

        <body className={classes.paper}>
        Installation prototype
        </body>
        <body className={classes.paper}>
        Exploring a single optic phenomenon.
        </body>
        

      </div>

        <img src={introImage} alt="Spatial Intro" className="threeFourthWidththreeFourthHeightContentRight"></img>
  
    
              <img className="fullRow" src={chairDiagram} />               
               
             

<video className="fullRow" controls showOnStart autoPlay loop muted>
    <source src={centerpointMovie} type="video/mp4"></source>
  </video>
 
               
                <img className="fullRow" src={centerpointWhole} />
              
       
    </Aux>
  );
}