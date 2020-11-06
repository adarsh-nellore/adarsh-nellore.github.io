import React, { Component } from 'react';
import axios from 'axios';
import Slider from '.'
import '../../App.scss'


import CenterpointVideo from '../../assets/Project-Video-Centerpoint.mp4';
import CenterpointPhoto from '../../assets/Project-Photo-Centerpoint.jpg';

import EdwardsVideo from '../../assets/Project-Video-Edwards.mp4';
import EdwardsPhoto from '../../assets/Project-Photo-Edwards.jpg';

import SpaceVideo from '../../assets/Project-Video-Space.mp4';
import SpacePhoto from '../../assets/Project-Photo-Space.jpg';

import SpatialVideo from '../../assets/Project-Video-Spatial.mp4';
import SpatialPhoto from '../../assets/Project-Photo-Spatial.jpg';

import SumoVideo from '../../assets/Project-Video-Sumo.mp4';
import SumoPhoto from '../../assets/Project-Photo-Sumo.jpg';


class SliderApp extends Component {

  state = {
    //photos: [],
    movies: [
      {
        id: 1,
        image: EdwardsVideo,
        imageBg: EdwardsPhoto ,
        title: "Edwards"

      },
      {
        id: 1,
        image: SpatialVideo,
        imageBg: SpatialPhoto,
        title: "Spatial"

      },
      {
        id: 1,
        image: SpaceVideo,
        imageBg: SpacePhoto ,
        title: "Space"

      },
      {
        id: 1,
        image: CenterpointVideo,
        imageBg: CenterpointPhoto ,
        title: "Centerpoint"

      },
      {
        id: 1,
        image: SumoVideo,
        imageBg: SumoPhoto ,
        title: "Sumo"

      }
    
    ],
    loading: true,
    query: ''
  }

  
  componentDidMount() {

 /*
 Removing flickr dependency for now due to security issues
 
  const apiKey = '28c3d5434f6a9aecf0dc3871bdd8ce7c';
    const baseurl = 'https://api.flickr.com/services/rest/';
    const methodname = 'flickr.photos.search';
    const userid = '189664396@N03';
    let myvideos = [];
    let myurl = baseurl + '?method=' + methodname + '&user_id=' + userid + '&api_key=' + apiKey + '&text=Project&size=q&format=json&nojsoncallback=1';
    var newStateArray = [];
    let videoname;
    let thisrecord;
    let thisvideo;
    axios.get(myurl)

      .then(response => {
        //Response object executed once results are obtained from Flickr

        let flickrresponse = response.data.photos.photo;
        let a = flickrresponse.filter(photo => photo.title.includes("Video"));

        for (var i = 0; i < a.length; i++) {
          const thisvideo = a[i];
          const foundphoto = flickrresponse.filter(thisphoto => thisvideo.title.replace('his-', '') === thisphoto.title.replace('Project-Photo-', ''));

          if (foundphoto.length > 0) {

            newStateArray.push({
              id: thisvideo.id,
              image: 'https://www.flickr.com/photos/' + userid + '/' + thisvideo.id + '/play/720p/' + thisvideo.secret,
              imageBg: 'https://farm' + foundphoto[0].farm + '.staticflickr.com/' + foundphoto[0].server + '/' + foundphoto[0].id + '_' + foundphoto[0].secret + '.jpg',
              title: foundphoto[0].title
            })

          }
        }

        console.log(" Potos Videos =" + newStateArray);


        this.setState({
          movies: newStateArray
        });



      })
      .catch(error => {
        console.log('Julie. Error fetching and parsing data', error)
      })
*/


  }

  


  render() {


    return (
      <div className="app">
        <Slider>
          {this.state.movies.map(movie => (
            <Slider.Item movie={movie} title={movie.title} key={movie.id}></Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}



export default SliderApp;
