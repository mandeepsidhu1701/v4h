import React from 'react';
import {NavigationBar} from './baseComponents';
import Footer from './baseComponents/Footer/Footer';

export default function Layout(props) {
  return (
    <div>
      <main style={{minHeight: 'calc(100vh - 70px)'}}>
        {/* when use calc, there should be space before and after operator, or it is invalid */}
        <NavigationBar />
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
