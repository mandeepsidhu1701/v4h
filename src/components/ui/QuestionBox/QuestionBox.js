import React from 'react';
import {Typography, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = (textColor) =>
  makeStyles({
    content: {
      padding: '4% 20px'
    },
    avatar: {
      width: '100px',
      height: '100px',
      margin: '20px auto',
      [`@media (max-width:768px)`]: {
        width: '60px',
        height: '60px',
        margin: '10px auto'
      }
    },
    questionBox: {
      fontSize: '0.9em',
      fontWeight: 'normal',
      letterSpacing: '2px',
      lineHeight: '1.5',
      [`@media (max-width:768px)`]: {
        fontSize: '0.75em',
        lineHeight: '1.2'
      }
    },
    listQuestions: {
      color: textColor,
      marginTop: '1em'
    },
    listAnswer: {
      color: '#fff',
      marginBottom: '1.5em'
    },
    viewBtn: {
      margin: '2em auto',
      width: '100px',
      height: '28px',
      border: 'solid 2px #d2a75f',
      fontSize: '0.8em',
      lineHeight: '2.2',
      textAlign: 'center',
      letterSpacing: '1.5px',
      '&:hover': {
        backgroundColor: '#d2a75f'
      }
    },
    linkStyle: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 'bold'
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
      <div className={classes.viewBtn}>
        <a href="#" className={classes.linkStyle}>
          VIEW MORE
        </a>
      </div>
    </div>
  );
}

export default QuestionBox;
