import React, { Component } from 'react';
import classes from './Communication.css'
import Aux from '../../components/NetflixSlider/Aux'

import board1 from '../../assets/Communication/board1.jpg'
import board2 from '../../assets/Communication/board2.jpg'
import board3 from '../../assets/Communication/board3.jpg'
import board4 from '../../assets/Communication/board4.jpg'

import magnet1 from '../../assets/Communication/magnet1.png'
import magnet2 from '../../assets/Communication/magnet2.png'

import magnetbox from '../../assets/Communication/magnetbox.jpg'
import filings from '../../assets/Communication/filings.jpg'
import flowers from '../../assets/Communication/flowers.jpg'

import namaste from '../../assets/Communication/namaste.jpg'

import clasp from '../../assets/Communication/clasp.png'
import '../../styles/LayoutStyles.css'



class Communication extends Component{

    render () {
        return (
          <Aux>
         <div class="container">
            <div class="item">The Complexion Project: Designing for Diasporic and Evolutionary Interior Spaces</div>
            <div class="item">The Complexion Project: Physical and Anthropological Biometric Data</div>
            <div class="item">Fuck Commitee Mentality - Tom Sachs, Van Neistat</div>
            <div class="item">Our world of overly defined and capitalist interaction. Creating a more democratic, autonomous future by increasing necessity for freedom of movement.</div>
            <div class="item">5</div>
          </div>

          <div>
            <img className="fullRow" src={board1} />
            <img className="fullRow" src={board2} />
            <img className="fullRow" src={board3} />
            <img className="fullRow" src={board4} />

          </div>

          <div>
            <img className="fullRow" src={magnet1} />
            <img className="fullRow" src={magnet2} />
            <img className="fullRow" src={magnetbox} />

            'Filings and flowers'
            <img className="fullRow" src={filings} />
            <img className="fullRow" src={namaste} />
            <img className="fullRow" src={clasp} />

            
        

          </div>
          </Aux>
        );
}
}

export default Communication;