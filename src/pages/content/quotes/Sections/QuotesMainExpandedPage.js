import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';

import ShadableCard from './ShadableCard';
import {tableTitles, vitalityData, wisdomData, empowermentData, clarityData} from './quoteData';

class QuotesMainExpandedPage extends Component {
  render() {
    const rowNum = [1, 2, 3];
    const {goDetail} = this.props.goDetail;
    return (
      <Grid container direction="row" justify="flex-start">
        {tableTitles.map((item) => {
          return (
            <Grid item xs={3} style={{marginTop: 20, marginBottom: 20}} key={item}>
              <Typography align="center" style={{color: '#ffffff'}}>
                {item}
              </Typography>
            </Grid>
          );
        })}
        {/** pictures */}
        {rowNum.map((item, rowNo) => {
          let pics = [];
          pics.push(
            /** vitalityData */
            <Grid item xs={3} key={vitalityData[rowNo].id}>
              <ShadableCard item={vitalityData[rowNo]} goDetail={goDetail}></ShadableCard>
            </Grid>
          );
          pics.push(
            /** wisdomData */
            <Grid item xs={3} key={wisdomData[rowNo].id}>
              <ShadableCard item={wisdomData[rowNo]} goDetail={goDetail}></ShadableCard>
            </Grid>
          );
          pics.push(
            /** empowermentData */
            <Grid item xs={3} key={empowermentData[rowNo].id}>
              <ShadableCard item={empowermentData[rowNo]} goDetail={this.props.goDetail}></ShadableCard>
            </Grid>
          );
          pics.push(
            /** clarityData */
            <Grid item xs={3} key={clarityData[rowNo].id}>
              <ShadableCard item={clarityData[rowNo]} goDetail={this.props.goDetail}></ShadableCard>
            </Grid>
          );
          return <>{pics}</>;
        })}
      </Grid>
    );
  }
}

export default QuotesMainExpandedPage;
