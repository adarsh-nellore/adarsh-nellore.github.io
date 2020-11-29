import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade';
import Aux from '../Aux'
import './ProjectStyles/Centerpoint.css'
import '../../../styles/LayoutStyles.css';
import './ProjectStyles/video-react.css';

//Images and videos
// import catheterImage from '../../../assets/Edwards_Materials/catheter.jpg'
// import heartValve from '../../../assets/Edwards_Materials/HeartValves3.jpg'
import Valvegif from '../../../assets/Edwards_Materials/Valve.gif'
import TextLoop from "react-text-loop";
import tavrVideo from '../../../assets/Edwards_Materials/edwards.mp4'


import ed1 from '../../../assets/Edwards_Materials/ed1.jpg'
import ed2 from '../../../assets/Edwards_Materials/ed2.jpg'
import ed3 from '../../../assets/Edwards_Materials/ed3.jpg'
import ed4 from '../../../assets/Edwards_Materials/ed4.jpg'
import ed5 from '../../../assets/Edwards_Materials/ed5.jpg'
import ed6 from '../../../assets/Edwards_Materials/ed6.jpg'
import ed7 from '../../../assets/Edwards_Materials/ed7.jpg'
import ed8 from '../../../assets/Edwards_Materials/ed8.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: '#222222',
    wordSpacing: "1px",
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontFamily: 'Arial',
    fontSize: 25,
    textShadow: 'none',
    resizeMode: 'contain',
    display: "flex"

  }

}));
export default function Edwards() {

  const classes = useStyles();
  return (

    <Aux>



        <div className="threeFourthWidthContentLeft">
        <h1 className={classes.paper}>
        Transcatheter Aortic Valve Replacement [TAVR] Alignment Module
        </h1>

        <body className={classes.paper}>
          A fixture that increases precision of prosthetic valve placement during transcatheter aortic valve replacement for patients with aortic valve stenosis.
        </body>

        {/* <body className={classes.paper}>
          Is it possible to use interior spaces as instruments?
          Can we translate interior resonance to music?
          How might neural networks facilitate musical experiences?
        </body> */}

      </div>





      {/* <div className="titletxt" >
        <Fade bottom>
          <h1> Transcatheter Aortic Valve Replacement [TAVR] Alignment Module.</h1>
        </Fade>
      </div> */}
{/* 
      <div className="loglinetxt" >
        <Fade bottom>

          <h1> */}

            {/* <TextLoop mask={true} fade={true} className={"redtxt"}> */}
              {/* <span>"Usability</span>
              <span>"Precision</span> */}
              {/* <span>TAVR</span> */}
            {/* </TextLoop>{" "}
            <TextLoop delay={600} mask={true} fade={true}> */}
              {/* <span>creates</span>
              <span>saves</span> */}
              {/* <span>Alignment</span> */}
            {/* </TextLoop>{" "} */}
            {/* <TextLoop delay={1200} mask={true} fade={true} className={"redtxt"}> */}
              {/* <span>precision."</span>
              <span>lives."</span> */}
              {/* <span>Module.</span> */}
            {/* </TextLoop> */}

{/* 
          </h1>
        </Fade>

      </div> */}

      <div className={classes.root}>
        {/* <div> */}
         
            {/* <img className="fullRow" src={heartValve} alt="Heart Valve"/>
         */}

          {/* <div className="fullRowNohHeight">
            <body className={classes.paper}>
              HEART VALVES ARE MEANT TO ACT AS DOORS TO CHAMBERS OF THE HEART THROUGH WHICH BLOOD IS PUMPED. THEREFORE, IF A HEART VALVE DOESN'T CLOSE OR OPEN PROPERLY, BLOOD FLOW IS OBSRTRUCTED AND THE PATIENT WILL NOT HAVE THE NECESSARY AMOUNT OF BLOOD FLOWING THROUGH THEIR BODY. THIS IS CALLED REGURGITATION OF THE BLOOD.
             </body>
          </div> */}
        {/* </div> */}

        


       
            <img className="halfRowHalfHeight" src={Valvegif} alt="Valve"/>
        
{/* 
          <div className="fullRowNohHeight">
            <body className={classes.paper}>
              AORTIC VALVE STENOSIS OCCURS DUE TO OVER-CALCIFICATION OF THE AORTIC VALVE, WHICH MAKES PATIENTS' AORTIC VALVES EXTREMELY RIGID, WHICH KEEPS THE VALVE FROM OPENING FULLY.
            </body>
          </div>
    

        <div>
          <div className="fullRowNohHeight">
            <body className={classes.paper}>
                AS OPPOSED TO OPEN HEART SURGERY, WHICH CARRIES SIGNIFICANT RISK FOR THE PATIENT AS WELL AS LONG RECOVER TIMES, TRANSCATHETER AORTIC VALVE REPLACEMENT [TAVR], WHICH IS A MINIMALLY INVASIVE PROCEDURE, IS USED TO REPLACE THE DYSFUNCTIONAL HEART VALVE WITH A PROSTHETIC ONE. A SURGEON USES A CATHETER DELIVERY SYSTEM TO PLACE THE PROSTHETIC VALVE IN PLACE OF THE OLD ONE.
            </body>

            </div>
            
            <div >
              <img className="fullRow" src={catheterImage} />
            </div>
        </div> */}

    
          <video className="fullRow" controls showOnStart autoPlay loop muted>
            <source src={tavrVideo} type="video/mp4"></source>
          </video>

         
            <img src={ed1} className="fullRow"/>
          

         
            <img src={ed2} className="fullRow"/>
        

         
            <img src={ed3} className="fullRow"/>
         

        
            <img src={ed4} className="fullRow"/>
         

         
            <img src={ed5} className="fullRow"/>
          

         
            <img src={ed6} className="fullRow"/>
          

          
            <img src={ed7} className="fullRow"/>
          

       
            <img src={ed8} className="fullRow"/>
          









      </div>
    </Aux>
  );
}