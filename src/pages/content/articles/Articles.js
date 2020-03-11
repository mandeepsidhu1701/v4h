import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import SectionArticleCard from './Sections/SectionArticleCard';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  }
});

class Articles extends Component {
  render() {
    return (
      <React.Fragment>
        <SectionArticleCard />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Articles);
