import React from 'react';
import './SliderStyles/Content.scss';
import ChooseProject from './ChooseProject'


const Content = ({ movie, onClose }) => (

  <div className="content">
    <div className="content__area">
      {/* <div className="content__area__container">

        
      </div> */}

    {/* </div> */}
    {/* <div className="content__background"> */}
      {/* <div className="content__background__shadow" /> */}
     
      {/* <AutoLayout></AutoLayout> */}

      <ChooseProject movie={movie}/>

    </div>
  </div>
);

export default Content;
