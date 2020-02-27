import React from 'react';
import {NavigationBar} from './baseComponents';

export default function Layout(props) {
  return (
    <div>
      <NavigationBar />
      {props.children}
    </div>
  );
}
