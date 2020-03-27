import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';

const useStyles = (bgImage) =>
  makeStyles({
    content: {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'none',
      padding: '5%',
      height: '100%',
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
  const classes = useStyles(props.bgImage)();
  return (
    <div className={classes.content}>
      <div className={classes.textContent}>
        <Typography className={classes.heading}>Articles</Typography>
        <Typography>{props.articleContent}</Typography>
      </div>
    </div>
  );
}

export default OrganizeArticleBox;
