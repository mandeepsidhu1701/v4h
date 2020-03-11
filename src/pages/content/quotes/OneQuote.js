import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

//import Background from '../../components/Background'
import QuotesDetail from './Sections/QuotesDetail';
import QuotesMainPage from './Sections/QuotesMainPage';
import QuotesMainExpandedPage from './Sections/QuotesMainExpandedPage';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },

  cardWrapper: {
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer'
  },

  cardShader: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'block'
  }
});

const style = {
  //overflow: 'hidden',
  //backgroundImage : 'url(/images/matt-hardy-562566-unsplash@2x.png)',
  //backgroundPosition : 'center',
  //backgroundRepeat : 'no-repeat',
  backgroundSize: '100% auto, cover'
};

class OneQuote extends Component {
  goDetail = (e) => {
    this.setState({detailPage: true});
  };

  goExpanded = (e) => {
    this.setState({expanded: true, detailPage: false});
  };

  constructor(props) {
    super(props);
    this.goDetail = this.goDetail.bind(this);
    this.goExpanded = this.goExpanded.bind(this);
    this.state = {
      detailPage: false,
      prodid: null,
      expanded: false
    };
  }

  render() {
    return (
      <div style={style}>
        {this.state.detailPage ? (
          <QuotesDetail prodid={this.state.prodid}></QuotesDetail>
        ) : this.state.expanded ? (
          <QuotesMainExpandedPage goDetail={this.goDetail} goExpanded={this.goExpanded}></QuotesMainExpandedPage>
        ) : (
          <QuotesMainPage goDetail={this.goDetail} goExpanded={this.goExpanded}></QuotesMainPage>
        )}
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(OneQuote);
