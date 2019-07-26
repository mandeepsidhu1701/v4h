import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PageWrapper from '../../components/common/BackVideoWithAppBarWrapper';
import CardBox from '../../components/common/ui/CardBox'
import cardData from './cardData'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})

class Articles extends Component {
  render() {
    const { classes } = this.props
    const handleClick = (param) => {
      console.log('this is:', param)
    }
    return (
      <PageWrapper>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          {cardData.map(card => (
            <Grid item xs={12} sm={6} md={3} key={cardData.indexOf(card)}>
              <CardBox
                id={card.id}
                image={card.image}
                title={card.title}
                content={card.content}
                topbtntext={card.topbtntext}
                bottombtntext={card.bottombtntext}
                handleClick={handleClick}
              />
            </Grid>
          ))}
        </Grid>
      </PageWrapper>
    )
  }
}

export default withStyles(styles)(Articles);
