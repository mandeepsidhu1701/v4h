import React from 'react';
import {NavigationBar} from './baseComponents';
import Footer from './baseComponents/Footer/Footer';
import './Layout.css';

export default function Layout(props) {
  return (
    <body>
      <main>
        {/* when use calc, there should be space before and after operator, or it is invalid */}
        <NavigationBar />
        {props.children}
      </main>
      <Footer className="footer" />
    </body>
  );
}
