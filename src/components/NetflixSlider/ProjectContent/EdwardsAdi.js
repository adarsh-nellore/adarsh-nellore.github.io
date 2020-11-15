import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import image from '../../../assets/AI_Image2_2.jpg'
import Fade from 'react-reveal/Fade';
import Aux from '../Aux'
import './Centerpoint.css'
//import './video-react.css'
// import ParallaxProvider from 'react-scroll-parallax'
//import  '../../../../node_modules/video-react/dist/video-react.css';
import  './video-react.css';
import { Parallax } from 'react-scroll-parallax';
import catheterImage from '../../../assets/catheter.jpg'
import stakeholderImage from '../../../assets/1x/Stakeholders-100.jpg'
import heartValve from '../../../assets/HeartValves3.jpg'
import Valvegif from '../../../assets/Valve.gif'


import TextLoop from "react-text-loop";
import YouTube from 'react-youtube';
import { Player } from 'video-react';


import tavrVideo from '../../../assets/edwards.mp4'
import edwardscover from '../../../assets/Edwards_Materials/edwardscover.jpg'
import image1 from '../../../assets/Edwards_Materials/image1.png'
import image2 from '../../../assets/Edwards_Materials/image2.png'
import image3 from '../../../assets/Edwards_Materials/image3.png'





export default function Edwards() {


  return (
    
    <Aux>

      {/* <Parallax y={[-20,0]} tagOuter="figure"> */}

      <div>
        <img src={edwardscover}/>
      </div>

      <div className="titletxt" >
        <Fade bottom>
          <h1> Transcatheter Aortic Valve Replacement [TAVR] Alignment Module.</h1>
        </Fade>
      </div>



     








<div>

              <img src={heartValve} />  
              </div>
      

<div>
HEART VALVES ARE MEANT TO ACT AS DOORS TO CHAMBERS OF THE HEART THROUGH WHICH BLOOD IS PUMPED. THEREFORE, IF A HEART VALVE DOESN'T CLOSE OR OPEN PROPERLY, BLOOD FLOW IS OBSRTRUCTED AND THE PATIENT WILL NOT HAVE THE NECESSARY AMOUNT OF BLOOD FLOWING THROUGH THEIR BODY. THIS IS CALLED <mark> REGURGITATION OF THE BLOOD</mark>.

</div>



             
           
        
                <div>
                <img src={Valvegif} />
               
                
            AORTIC VALVE STENOSIS OCCURS DUE TO OVER-CALCIFICATION OF THE AORTIC VALVE, WHICH MAKES PATIENTS' AORTIC VALVES EXTREMELY RIGID, WHICH KEEPS THE VALVE FROM OPENING FULLY.

            </div>

          

<div>

                
            AS OPPOSED TO OPEN HEART SURGERY, WHICH CARRIES SIGNIFICANT RISK FOR THE PATIENT AS WELL AS LONG RECOVER TIMES, TRANSCATHETER AORTIC VALVE REPLACEMENT [TAVR], WHICH IS A MINIMALLY INVASIVE PROCEDURE, IS USED TO REPLACE THE DYSFUNCTIONAL HEART VALVE WITH A PROSTHETIC ONE. A SURGEON USES A CATHETER DELIVERY SYSTEM TO PLACE THE PROSTHETIC VALVE IN PLACE OF THE OLD ONE.
            <img className={"float-left"} src={catheterImage} />

            </div>
         



<div>
             
              <Player 
              playsInline
              fluid={false}
              
              
            
                 src={tavrVideo} />

</div>
      
        

        <div>
          <img src={image1} />
  

          </div>

          <div>
          <img src={image2} />
  

          </div>

          <div>
          <img src={image3} />
  

          </div>
          

        
          
          
        
           
            


         
                
           
    </Aux>
  );
}