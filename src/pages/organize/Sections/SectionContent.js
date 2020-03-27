import React from 'react';
import {withStyles, Grid, Typography, Avatar} from '@material-ui/core';
import sampleAvatar from '@/assets/images/organize/sample_avatar.png';
import {QuestionBox, OrganizeArticleBox} from '@/components/ui';
import articleBg from '@/assets/images/organize/health_article.png';

import {styles} from './SectionContentStyle';
function SectionContent({classes, questions, articleContent}) {
  return (
    <Grid container spacing={0} alignItems="stretch">
      <Grid item md={3}></Grid>
      <Grid item md={3} className={classes.contentQA}>
        <QuestionBox imagesrc={sampleAvatar} questions={questions} textColor="#52ac0a" />
      </Grid>
      <Grid item md={6}>
        <OrganizeArticleBox bgImage={articleBg} articleContent={articleContent} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(SectionContent);
