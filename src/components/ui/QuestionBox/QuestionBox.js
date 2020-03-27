import React from 'react';
import {Typography, Avatar} from '@material-ui/core';
const useStyles = (textColor) =>
  makeStyles({
    content: {
      padding: '4% 20px'
    },
    avatar: {
      width: '100px',
      height: '100px',
      margin: '20px auto'
    },
    questionBox: {
      fontSize: '0.9em',
      fontWeight: 'normal',
      letterSpacing: '2px',
      lineHeight: '1.5'
    },
    listQuestions: {
      color: textColor,
      marginTop: '1em'
    },
    listAnswer: {
      color: '#fff',
      marginBottom: '1em'
    }
  });

function QuestionBox(props) {
  const classes = useStyles(props.textColor)();
  return (
    <div className={classes.content}>
      <Typography align="center" className={classes.qaHeading}>
        Q & A
      </Typography>
      <Avatar src={props.imagesrc} className={classes.avatar} />
      <div className={classes.questionBox}>
        {' '}
        <div className={classes.listQuestions}>{props.questions[0]} </div>
        <div className={classes.listAnswer}>{props.questions[1]}</div>
        <div className={classes.listQuestions}>{props.questions[0]}</div>
        <div className={classes.listAnswer}>{props.questions[1]}</div>
      </div>
      <div>VIEW MORE</div>
    </div>
  );
}

export default QuestionBox;
