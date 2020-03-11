import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import ArticleCard from './Sections/SectionArticleCard';

const styles = (theme) => ({
  root: {
    flexGrow: 1
  }
});

class Articles extends Component {
  handleClick = (param) => {
    console.log('this is:', param);
  };

  render() {
    return <ArticleCard></ArticleCard>;
  }
}

export default withStyles(styles)(Articles);
