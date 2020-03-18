import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

import QuotesDetail from './QuotesDetail';
import QuotesMain from '../QuotesMain';
import QuotesMainExpanded from './QuotesMainExpanded';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  },
});

const style = {
  //overflow: 'hidden',
  //backgroundImage : 'url(/images/matt-hardy-562566-unsplash@2x.png)',
  //backgroundPosition : 'center',
  //backgroundRepeat : 'no-repeat',
  backgroundSize: '100% auto, cover',
  paddingTop : '88px',
};

class Quotes extends Component {
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
          <QuotesMainExpanded goDetail={this.goDetail} goExpanded={this.goExpanded}></QuotesMainExpanded>
        ) : (
          <QuotesMain goDetail={this.goDetail} goExpanded={this.goExpanded}></QuotesMain>
        )}
        <div>footer</div>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme: true})(Quotes);
