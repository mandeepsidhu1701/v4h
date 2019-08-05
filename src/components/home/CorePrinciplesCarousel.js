import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import '../../../node_modules/pure-react-carousel/dist/react-carousel.es.css';

import data from '../../data/homeData';

export default class extends Component {
  render() {

    const corePrincipals = data["corePrincipals"];

    const corePrincipalNames = [
      "VISION",
      "MISSION",
      "CHARTER",
      "CREATION COMPASS",
      "METAWHEEL",
      "INITIATIVES"
    ];

    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          {
            corePrincipalNames.map((name, i) => {
              return(
                <Slide index={i} key={i}>{name} {corePrincipals[name]}</Slide>
              );
            })
          }
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}