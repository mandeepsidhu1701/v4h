import React from 'react';
import NavigationBar from '../layout/Header';
import Footer from '../layout/Footer/Footer';
import {styles} from './LayoutStyle';

export default function Layout(props) {
  return (
    <React.Fragment>
      <main>
        {/* when use calc, there should be space before and after operator, or it is invalid */}
        <NavigationBar />
        {props.children}
      </main>
      <Footer className={styles.footer} />
    </React.Fragment>
  );
}
