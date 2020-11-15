import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from 'react-reveal/Fade';
import Aux from '../Aux'
import './Centerpoint.css'
import '../../../styles/LayoutStyles.css';
import './video-react.css';

//Images and videos
import catheterImage from '../../../assets/catheter.jpg'
import heartValve from '../../../assets/HeartValves3.jpg'
import Valvegif from '../../../assets/Valve.gif'
import TextLoop from "react-text-loop";
import tavrVideo from '../../../assets/edwards.mp4'

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
    fontFamily: 'Courier New',
    fontSize: 11,
    textShadow: 'none',
    resizeMode: 'contain',
    display: "flex"

  }

}));
export default function Edwards() {

  const classes = useStyles();
  return (

    <Aux>

      
      <div className="titletxt" >
        <Fade bottom>
          <h1> Transcatheter Aortic Valve Replacement [TAVR] Alignment Module.</h1>
        </Fade>
      </div>

      <div className="loglinetxt" >
        <Fade bottom>

          <h1>

            <TextLoop mask={true} fade={true} className={"redtxt"}>
              <span>"Usability</span>
              <span>"Precision</span>
              {/* <span>TAVR</span> */}
            </TextLoop>{" "}
            <TextLoop delay={600} mask={true} fade={true}>
              <span>creates</span>
              <span>saves</span>
              {/* <span>Alignment</span> */}
            </TextLoop>{" "}
            <TextLoop delay={1200} mask={true} fade={true} className={"redtxt"}>
              <span>precision."</span>
              <span>lives."</span>
              {/* <span>Module.</span> */}
            </TextLoop>


          </h1>
        </Fade>

      </div>

      <div className={classes.root}>
        <div>
         
            <img className="fullRow" src={heartValve} alt="Heart Valve"/>
        

          <div className="fullRowNohHeightTxt">
            <body className={classes.paper}>
              HEART VALVES ARE MEANT TO ACT AS DOORS TO CHAMBERS OF THE HEART THROUGH WHICH BLOOD IS PUMPED. THEREFORE, IF A HEART VALVE DOESN'T CLOSE OR OPEN PROPERLY, BLOOD FLOW IS OBSRTRUCTED AND THE PATIENT WILL NOT HAVE THE NECESSARY AMOUNT OF BLOOD FLOWING THROUGH THEIR BODY. THIS IS CALLED REGURGITATION OF THE BLOOD.
             </body>
          </div>
        </div>


       
            <img className="halfRowHalfHeight" src={Valvegif} alt="Valve"/>
        

          <div className="fullRowNohHeightTxt">
            <body className={classes.paper}>
              AORTIC VALVE STENOSIS OCCURS DUE TO OVER-CALCIFICATION OF THE AORTIC VALVE, WHICH MAKES PATIENTS' AORTIC VALVES EXTREMELY RIGID, WHICH KEEPS THE VALVE FROM OPENING FULLY.
            </body>
          </div>
    

        <div>
          <div className="fullRowNohHeightTxt">
            <body className={classes.paper}>
                AS OPPOSED TO OPEN HEART SURGERY, WHICH CARRIES SIGNIFICANT RISK FOR THE PATIENT AS WELL AS LONG RECOVER TIMES, TRANSCATHETER AORTIC VALVE REPLACEMENT [TAVR], WHICH IS A MINIMALLY INVASIVE PROCEDURE, IS USED TO REPLACE THE DYSFUNCTIONAL HEART VALVE WITH A PROSTHETIC ONE. A SURGEON USES A CATHETER DELIVERY SYSTEM TO PLACE THE PROSTHETIC VALVE IN PLACE OF THE OLD ONE.
            </body>

            </div>
            
            <div >
              <img className="fullRow" src={catheterImage} />
            </div>
        </div>

    
          <video className="fullRow" controls showOnStart autoPlay loop muted>
            <source src={tavrVideo} type="video/mp4"></source>
          </video>


      </div>
    </Aux>
  );
}