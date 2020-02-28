import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CarouselSlide.css';

import {TitlePosition, Direction} from './Carousel';

class CarouselSlide extends Component {
  static propTypes = {
    imageURL: PropTypes.string.isRequired,
    direction: PropTypes.oneOf([Direction.up, Direction.down, Direction.left, Direction.right]),
    titlePosition: PropTypes.oneOf([TitlePosition.top, TitlePosition.bottom]),
    title: PropTypes.string,
    text: PropTypes.string
  };

  render() {
    const {imageURL, title, text, titlePosition, direction} = this.props;

    let titleClass;
    if (direction === Direction.up || direction === Direction.down) {
      if (titlePosition === TitlePosition.top) {
        titleClass = 'carouselSlideTitleTopDirectionVertical';
      } else {
        titleClass = 'carouselSlideTitleBottomDirectionVertical';
      }
    } else if (titlePosition === TitlePosition.bottom) {
      titleClass = 'carouselSlideTitleBottom';
    } else {
      titleClass = 'carouselSlideTitleTop';
    }

    let carouselTextClass;
    if (direction === Direction.up || direction === Direction.down) {
      if (titlePosition === TitlePosition.top) {
        carouselTextClass = 'carouselSlideTextTitleTopDirectionVertical';
      } else {
        carouselTextClass = 'carouselSlideTextTitleBottomDirectionVertical';
      }
    } else if (titlePosition === TitlePosition.bottom) {
      carouselTextClass = 'carouselSlideTextTitleBottom';
    } else {
      carouselTextClass = 'carouselSlideTextTitleTop';
    }

    return (
      <div className="carouselSlideContainer carouselSlideAnimation">
        <img src={imageURL} alt="" className="carouselSlideImage" />
        {title ? <div className={`carouselSlideTitle ${titleClass}`}>{title}</div> : null}
        {text ? <div className={`carouselSlideText ${carouselTextClass}`}>{text}</div> : null}
      </div>
    );
  }
}

export {TitlePosition};

export default CarouselSlide;