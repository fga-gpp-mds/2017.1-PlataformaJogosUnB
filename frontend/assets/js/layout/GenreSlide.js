import React from 'react';
import Slider from 'react-slick'

export default class GenreSlide extends React.Component {
  constructor (props) {

      super(props);
      this.state = {"games": []};
  }

  componentWillMount () {

      this.loadGameFromServer();

  }

  loadGameFromServer () {

      fetch("/api/list/",
          {
              "headers": new Headers({
                  "Accept": "application/json",
                  "Content-Type": "application/json",
              }),
              "method": "GET"
          }).
        then((response) => response.json()).
        then((games) => {

            this.setState({games});

        });

  }
  render() {
    const images = this.mountImages();

    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 3
    };
    if(images.length){
    return (
      <div>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <h2>Center Mode</h2>
        <Slider {...settings}>
          {images}
          {console.log('#######################')}
          {console.log(this.state.games)}
          {console.log('#######################')}
        </Slider>
      </div>
    );
  }else{
    return <img/>
  }
  }
  mountImages(){
   const images = [], imagesSlide = 10;
    for(var idx=0; idx < imagesSlide && idx < this.state.games.length; idx+=1){
        const image =
               (<div>
                        <img src={this.state.games[idx].slide_image} />
                </div>)
       images.push(image);
    
    }
    return images;
  }
}
