import React from "react";


import titlestylus from '../../../assets/SpaceStylus/titlestylus.jpg'

import senses from '../../../assets/SpaceStylus/senses.jpg'

import motorcontrol from '../../../assets/SpaceStylus/motorcontrol.jpg'

import fullstylus from '../../../assets/SpaceStylus/fullstylus.jpg'





import Aux from '../../../components/NetflixSlider/Aux'

import { Player } from 'video-react';
import '../../../../node_modules/video-react/dist/video-react.css';



export default function Sumo() {
    // const classes = useStyles();



    return (
        <Aux>

            <div>
                <img className="fullRow" src={titlestylus} />
            </div>

            <div>
                <img className="fullRow" src={senses} />
            </div>

            <div>
                <img className="fullRow" src={motorcontrol} />
            </div>

            <div>
                <img className="fullRow" src={fullstylus} />
            </div>

           
        </Aux>










    )
}


