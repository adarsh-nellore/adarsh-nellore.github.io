import React, { Component } from 'react';
import Slider from '../../components/NetflixSlider/Slider';
import Item from '../../components/NetflixSlider/Item'
import SliderAppEngineeringWork from '../../components/NetflixSlider/SliderAppEngineeringWork'



export class EngineeringWork extends Component {
    render() {


        return (
            // <div className="app">
            //     <Slider>
            //         {movies.map(movie => (
            //             <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            //         ))}
            //     </Slider>
            // </div>

            <SliderAppEngineeringWork></SliderAppEngineeringWork>
        );
    }
}

export default EngineeringWork;



