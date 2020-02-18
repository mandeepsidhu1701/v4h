import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageWrapper from '../../components/common/backVideoWithNavBarWrapper/BackVideoWithNavBarWrapper';
import CardBox from '../../components/common/ui/CardBox';
import articlesData from '../../data/articlesData';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class Articles extends Component {

  handleClick = (param) => {
    console.log('this is:', param)
  }

  render() {
    const { classes } = this.props
    
    return (
      <PageWrapper>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          {articlesData.map((card, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <CardBox
                id={card.id}
                image={card.image}
                title={card.title}
                content={card.content}
                topbtntext={card.topbtntext}
                bottombtntext={card.bottombtntext}
                handleClick={this.handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </PageWrapper>
    )
  }
}

export default withStyles(styles)(Articles);
