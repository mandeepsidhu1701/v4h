import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import PageWrapper from '../../components/common/BackVideoWithAppBarWrapper';
import CardBox from '../../components/common/ui/CardBox';
import articlesData from '../../data/articlesData';

class Articles extends Component {

  handleClick = (id) => {
    this.props.history.push('/articles/'+ id)
  }

  render() {
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

export default withRouter(Articles);
