import React from 'react';
import NavigationBar from '../layout/Header';
import Footer from '../layout/Footer/Footer';
import {styles} from './LayoutStyle';
import {withStyles} from '@material-ui/core';

function Layout(props) {
  return (
    <React.Fragment>
      <main>
        <NavigationBar />
        {props.children}
      </main>
      <Footer className={styles.footer} />
    </React.Fragment>
  );
}

export default withStyles(styles)(Layout);
