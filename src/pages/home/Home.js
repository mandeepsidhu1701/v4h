import React from 'react';
import PropTypes from 'prop-types';

import intl from 'react-intl-universal';

import { withStyles } from '@material-ui/core/styles';

import NavBar from '../../components/NavBar';


const styles = theme => ({
  
});

class Home extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <NavBar />
        <section>
          <p>Page Content goes here.</p>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
