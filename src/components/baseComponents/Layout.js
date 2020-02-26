import React from 'react';
import NavigationBar from './navigationBar';

const Layout = props => {
  return (
    <React.Fragment>
      <NavigationBar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
