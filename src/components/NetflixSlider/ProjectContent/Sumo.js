import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import museum from '../../../assets/SumoMaterials/museum.jpg'
import hand from '../../../assets/SumoMaterials/hand.jpg'

import circuit from '../../../assets/SumoMaterials/circuit.jpg'
import butt from '../../../assets/SumoMaterials/butt.jpg'

import closeup from '../../../assets/SumoMaterials/closeup.MP4'
import inaction from '../../../assets/SumoMaterials/inaction.mp4'

import sumofart from '../../../assets/SumoMaterials/sumofart.mp4'

import slant from '../../../assets/SumoMaterials/slant.jpg'

import Aux from '../../../components/NetflixSlider/Aux'

import '../../../../node_modules/video-react/dist/video-react.css';
import '../../../styles/LayoutStyles.css';

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

export default function Sumo() {
     const classes = useStyles();



    return (
        <Aux>


      <div className="oneFourthWidthContentLeft">
        <h1 className={classes.paper}>
        Resistance to silence and etiquette
        </h1>

        <body className={classes.paper}>
        
                At venues such as museums, we often feel the need to exhibit near pindrop silence and maybe even sophistication. Why is that? What about art implies the need to be silent and seem sophisticated? SUMo is an exploration of resistance to silence and sophistication, namely in the context of art.
        </body>
        
        

      </div>

<img src={museum} alt="Sumo" className="threeFourthWidththreeFourthHeightContentRight"></img>
  
        
<img className="fullRow" src={hand} />   

<video className="fullRow" controls showOnStart autoPlay loop muted>
    <source src={inaction} type="video/mp4"></source>
  </video>
  <div>
        <div className="fullRowNohHeightTxtHeightTxt">
          <body className={classes.paper}>  SUMo functions by detecting the proximity of an observer within 5 ft of itself. If this person is then silent for more 5 seconds, enough for an observer to start becoming uncomfortable with silence, the buttocks on the relief sculpture will make a quick turn and a fart nose is played.
                Why a fart? The sound is obscene and contradicts museum etiquette, which often prompts a visceral reaction from users.
          </body>
        </div> 
    </div>
            

           
                <img className="fullRow" alt="Circuit" src={circuit} />
           
                

      
                <img src={butt} className="fullRow" alt="Butt"/>
          


           
                <img src={slant} className="fullRow" alt="Slant"/>
         

                <video className="fullRow" controls showOnStart autoPlay loop muted>
                <source src={closeup} type="video/mp4"></source>
            </video>



            <video className="fullRow" controls showOnStart autoPlay loop muted>
                <source src={sumofart} type="video/mp4"></source>
            </video>


        </Aux>










    )
}


