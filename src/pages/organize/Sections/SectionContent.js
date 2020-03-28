import React from 'react';
import * as messageKeys from '@/locales';
import {styles} from './SectionContentStyle';
// Styled Component
import {withStyles, Grid, Typography} from '@material-ui/core';
import {
  QuestionBox,
  OrganizeArticleBox,
  SuspendisBox,
  OrganizeVideoBox,
  OrganizeGuideBox,
  InitiativesBox
} from '@/components/ui';
// Resources
import sampleAvatar from '@/assets/images/organize/sample_avatar.png';
import shareBtn from '@/assets/images/organize/share_btn.png';

function SectionContent(props) {
  const {
    classes,
    questions,
    articleContent,
    textColor,
    articleBg,
    videoBg,
    btnTitle,
    btnColor,
    videoDescription,
    videoName,
    guideContent,
    initiativesBg
  } = props;
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
          <OrganizeArticleBox articlebBgImage={articleBg} articleContent={articleContent} />
        </Grid>
      </Grid>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item md={3} xs={12}>
          <OrganizeVideoBox
            videoBgImage={videoBg}
            btnTitle={btnTitle}
            btnColor={btnColor}
            videoDescription={videoDescription}
            videoName={videoName}
          />
        </Grid>
        <Grid item md={3} xs={12} className={classes.shareVideo}>
          <img src={shareBtn} className={classes.shareImg} />
          <Typography className={classes.shareText}>{messageKeys.ORGANIZE_SECTIONCONTENT_SHARE}</Typography>
        </Grid>
        <Grid item md={6} xs={12} className={classes.contentGuide}>
          <OrganizeGuideBox guideContent={guideContent} />
        </Grid>
      </Grid>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item md={9} xs={12}>
          <InitiativesBox initiativesBg={initiativesBg} />
        </Grid>
        <Grid item md={3} xs={12} className={classes.shareVideo}>
          <Typography className={classes.visitText}>{messageKeys.ORGANIZE_SECTIONCONTENT_VISIT}</Typography>
          <div className={classes.workshopBtn}>
            <a href="#" className={classes.linkStyle}>
              {messageKeys.ORGANIZE_SECTIONCONTENT_GO_BUTTON}
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(SectionContent);
