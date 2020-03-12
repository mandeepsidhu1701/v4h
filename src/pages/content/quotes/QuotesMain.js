import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import ShadableCard from './Sections/ShadableCard';
import styles from './QuoteStyles';

import {tableTitles, vitalityData, wisdomData, empowermentData, clarityData} from '../../../data/quoteData';
import NavBar from './NavBar';

class QuotesMain extends Component {
  render() {
    const rowNum = [1, 2, 3, 4, 5];
    return (
      <>
        {/** navigation bar */}
        <NavBar goExpanded={this.props.goExpanded}/>
        {/** table header */}
        <Grid container direction="row" justify="flex-start" style={{paddingLeft: 120, paddingRight: 120}}>
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
                <ShadableCard item={vitalityData[rowNo]} goDetail={this.props.goDetail}></ShadableCard>
              </Grid>
            );
            pics.push(
              /** wisdomData */
              <Grid item xs={3} key={wisdomData[rowNo].id}>
                <ShadableCard item={wisdomData[rowNo]} goDetail={this.props.goDetail}></ShadableCard>
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
      </>
    );
  }
}

export default QuotesMain;
