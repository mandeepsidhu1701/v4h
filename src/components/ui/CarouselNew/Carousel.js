import React from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import styles from './CarouselStyles';
import {CSSTransition as ReactCSSTransitionGroup} from 'react-transition-group';

import './Carousel.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [
        '@/assets/images/content/landing/planting.png', 
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg', 
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg', 
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg', 
        'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg'
        ], 
      current: 0, 
      isNext: true,
    };
    
    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);
  }
  
  handlerPrev() {
    let index = this.state.current,
        length = this.state.items.length;
    
    if( index < 1 ) {
      index = length;
    }
    
    index = index - 1;
  
    this.setState({
      current: index,
      isNext: false
    });
  }
  
  handlerNext() {
    let index = this.state.current,
        length = this.state.items.length - 1;
    
    if( index == length ) {
      index = -1;
    }
    
    index = index + 1;
    
    this.setState({
      current: index,
      isNext: true
    });
  }
  
  goToHistoryClick( curIndex, index ) {
    let next = (curIndex < index);
    this.setState({
      current: index,
      isNext: next
    });                 
  }
  
  render(){
    let index = this.state.current,
        isnext = this.state.isNext,
        src = this.state.items[index];
  
    return (
        <div className="carousel">
          <ReactCSSTransitionGroup
            transitionName={{
            enter: isnext ? 'enter-next' : 'enter-prev',
            enterActive: 'enter-active',
            leave: 'leave',
            leaveActive: isnext ? 'leave-active-next' : 'leave-active-prev'
          }}
           >
             <div className="carousel_slide" key={index}>
               <img src={src}/>
             </div>
           </ReactCSSTransitionGroup>
           <button className="carousel_control carousel_control__prev" onClick={this.handlerPrev}><span></span></button>
           <button className="carousel_control carousel_control__next" onClick={this.handlerNext}><span></span></button>
           <div className="carousel_history">
            <History 
              current={this.state.current} 
              items={this.state.items}
              changeSilde={this.goToHistoryClick}
            />
           </div>
        </div>
    )
  }
}

class History extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let current = this.props.current;
        let items = this.props.items.map( (el, index) => {
            let name = (index == current) ? 'active' : '';
            return (
                <li key={index}>
                    <button 
                        className={name} 
                        onClick={ () => this.props.changeSilde(current, index) }
                    ></button>
                </li>
            )
        });
    
        return (
            <div>
                <ul>{items}</ul>
                <hr style={{border: '1px solid #d2a75f',marginTop:"-4px"}}/>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Carousel));