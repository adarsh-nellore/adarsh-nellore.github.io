import React from 'react';

import Edwards from './ProjectContent/Edwards'
import Spatial from './ProjectContent/Spatial'
import CenterPoint from './ProjectContent/Centerpoint'
import Sumo from './ProjectContent/Sumo'
import Space from './ProjectContent/Space'

const ChooseProject = ({movie}) => {
  // alert({JSON.stringify(movie)});

  let chosencontent="";

  switch(movie.title.replace("Project-Photo-", '')) {
    case 'Centerpoint':
        chosencontent =<CenterPoint></CenterPoint>;      
        break;
    case 'Space':
      chosencontent =<Space></Space>
      break;
    case 'Edwards':
      chosencontent =<Edwards></Edwards>
      break;
    case 'Sumo':
      chosencontent =<Sumo></Sumo>
      break;
    case 'Spatial':
      chosencontent =<Spatial></Spatial>
      break;
    case 'Edwards':
      chosencontent =<Edwards></Edwards>
      break;
    default:
      //chosencontent =<Spatial></Spatial>
      break;

      
  }

 
  
  return(

    

    <div>        
    {chosencontent}
    </div>
    
    // <AutoLayout></AutoLayout>

    
  )

    
    
   

    

    

}

export default ChooseProject;