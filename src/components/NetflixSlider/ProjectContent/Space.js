import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import titlestylus from '../../../assets/SpaceStylus/titlestylus.jpg'

import senses from '../../../assets/SpaceStylus/senses.jpg'

import motorcontrol from '../../../assets/SpaceStylus/motorcontrol.jpg'

import fullstylus from '../../../assets/SpaceStylus/fullstylus.jpg'





import Aux from '../../../components/NetflixSlider/Aux'

import { Player } from 'video-react';
import '../../../../node_modules/video-react/dist/video-react.css';

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
      fontFamily: 'Arial',
      fontSize: 25,
      textShadow: 'none',
      overflow:'auto'  
    }
  }));


export default function Space() {
    const classes = useStyles();



    return (
        <Aux>

<div className="threeFourthWidthContentLeft">
        <h1 className={classes.paper}>
         Space Stylus  
        </h1>

        <body className={classes.paper}>
          A device that allows people with impairment or in extreme conditions to use touch screen devices.
        </body>

        <body className={classes.paper}>
          Is it possible to use interior spaces as instruments?
          Can we translate interior resonance to music?
          How might neural networks facilitate musical experiences?
        </body>

      </div>

            <div>
                <img className="fullWidthContentCenter" src={titlestylus} />
            </div>

            {/* <div>
                <img className="fullRow" src={senses} />
            </div>

            <div>
                <img className="fullRow" src={motorcontrol} />
            </div> */}

            <div>
                <img className="threeFourthWidthContentLeft" src={fullstylus} />
            </div>

           
        </Aux>










    )
}


