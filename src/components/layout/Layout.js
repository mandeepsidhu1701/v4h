import React from 'react';
import {withStyles, MuiThemeProvider} from '@material-ui/core';
import NavigationBar from '../layout/Header';
import Footer from '../layout/Footer/Footer';
import {styles, theme} from './LayoutStyle';

function Layout(props) {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <main>
          <NavigationBar />
          {props.children}
        </main>
        <Footer className={styles.footer} />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default withStyles(styles)(Layout);
