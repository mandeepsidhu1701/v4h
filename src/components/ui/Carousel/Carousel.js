import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

const TitlePosition = {
  top: 'top',
  bottom: 'bottom'
};

const Direction = {
  left: 'left',
  right: 'right',
  down: 'down',
  up: 'up'
};

class Carousel extends Component {
  static propTypes = {
    speed: PropTypes.number.isRequired,
    direction: PropTypes.oneOf([Direction.up, Direction.down, Direction.left, Direction.right]),
    titlePosition: PropTypes.oneOf([TitlePosition.top, TitlePosition.bottom]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
  };

  static defaultProps = {
    direction: Direction.right,
    titlePosition: TitlePosition.top
  };

  state = {
    index: 0,
    timeoutFunc: null
  };

  componentDidMount() {
    this.handleUpdateTimeout();
  }

  componentWillUnmount() {
    this.handleClearTimeout();
  }

  handleClearTimeout() {
    const {timeoutFunc} = this.state;
    clearTimeout(timeoutFunc);
    this.setState({timeoutFunc: null});
  }

  handleUpdateTimeout() {
    const {speed, direction} = this.props;

    const slideFunc =
      direction === Direction.left || direction === Direction.up ? this.handlePrevClick : this.handleNextClick;

    const timeoutFunc = setTimeout(slideFunc, speed);
    this.setState({timeoutFunc});
  }

  handleUpdateIndex = (i) => {
    this.handleClearTimeout();
    this.setState({index: i});
    this.handleUpdateTimeout();
  };

  handlePrevClick = () => {
    const childrenArray = React.Children.toArray(this.props.children);
    const {index} = this.state;
    const i = index === 0 ? childrenArray.length - 1 : index - 1;
    this.handleUpdateIndex(i);
  };

  handleNextClick = () => {
    const childrenArray = React.Children.toArray(this.props.children);
    const limit = childrenArray.length - 1;
    const {index} = this.state;
    const i = index === limit ? 0 : index + 1;
    this.handleUpdateIndex(i);
  };

  render() {
    const {index} = this.state;
    const {children, titlePosition, direction} = this.props;

    if (children === undefined) {
      return (
        <div>
          <div className="carouselRoot"></div>
        </div>
      );
    }

    const childrenArray = React.Children.toArray(children);

    const slide = React.cloneElement(childrenArray[index], {titlePosition, direction});

    let dotsClass;
    if (direction === Direction.up || direction === Direction.down) {
      dotsClass = 'carouselDotBlockVertical';
    } else {
      dotsClass = 'carouselDotBlockHorizontal';
    }
    if (direction === Direction.left || direction === Direction.right) {
      if (titlePosition === TitlePosition.top) {
        dotsClass += ' carouselDotBlockTitleTop';
      } else {
        dotsClass += ' carouselDotBlockTitleBottom';
      }
    }

    let prevButtonClass, nextButtonClass;
    if (direction === Direction.left || direction === Direction.right) {
      prevButtonClass = 'carouselLeftButton';
      nextButtonClass = 'carouselRightButton';
    } else {
      prevButtonClass = 'carouselDownButton';
      nextButtonClass = 'carouselUpButton';
    }

    return (
      <div>
        <div className="carouselRoot">
          {slide}
          <div className="carouselControls">
            <button tabIndex="0" className={`carouselArrowButton ${prevButtonClass}`} onClick={this.handlePrevClick} />
            <button tabIndex="0" className={`carouselArrowButton ${nextButtonClass}`} onClick={this.handleNextClick} />

            <span className={`carouselDotBlock ${dotsClass}`}>
              {React.Children.map(children, (child, i) => {
                return (
                  <button
                    tabIndex="0"
                    key={i}
                    onClick={() => this.handleUpdateIndex(i)}
                    className={`carouselDot ${i === index ? 'carouselDotActive' : null}`}
                  />
                );
              })}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export { TitlePosition, Direction };

export default Carousel;