import React from 'react';
import intl from 'react-intl-universal'
import style from './landing.css';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className={style.landing}>
        Welcome to HCN.
      </div>
    )
  }
}