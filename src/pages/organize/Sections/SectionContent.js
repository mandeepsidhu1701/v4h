import React from 'react';
import {withStyles, Grid, Typography, Avatar} from '@material-ui/core';
import sampleAvatar from '@/assets/images/organize/sample_avatar.png';
import {QuestionBox, OrganizeArticleBox, SuspendisBox} from '@/components/ui';
import articleBg from '@/assets/images/organize/health_article.png';

import {styles} from './SectionContentStyle';
function SectionContent({classes, questions, articleContent, textColor}) {
  return (
    <div>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item md={3} xs={12} className={classes.suspendisBox}>
          <SuspendisBox />
        </Grid>
        <Grid item md={3} xs={12} className={classes.contentQA}>
          <QuestionBox imagesrc={sampleAvatar} questions={questions} textColor={textColor} />
        </Grid>
        <Grid item md={6} xs={12}>
          <OrganizeArticleBox bgImage={articleBg} articleContent={articleContent} />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SectionContent);
