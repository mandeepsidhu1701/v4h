import React from 'react';
import * as messageKeys from '@/locales';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = (bgImage) =>
  makeStyles({
    content: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'none',
      padding: '5%',
      overflow: 'hidden'
    },
    textContent: {
      float: 'right',
      width: '35%',
      [`@media (max-width:768px)`]: {
        float: 'none',
        width: '100%'
      }
    },
    heading: {
      fontWeight: 'bold',
      letterSpacing: '3px'
    }
  });

function OrganizeArticleBox(props) {
  const classes = useStyles(props.articlebBgImage)();
  return (
    <div className={classes.content}>
      <div className={classes.textContent}>
        <Typography className={classes.heading}>{messageKeys.ORGANIZE_ARTICLEBOX_TITLE}</Typography>
        <Typography>{props.articleContent}</Typography>
      </div>
    </div>
  );
}

export default OrganizeArticleBox;
