import React from 'react';
import PropTypes from 'prop-types';
import intl from 'react-intl-universal'
import PageWrapper from '../../components/common/BackVideoWithAppBarWrapper';
import { withStyles } from '@material-ui/core/styles';

import NavBar from '../../components/NavBar';

const styles = theme => ({

});

class Home extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <PageWrapper>        
        <p>A dream you dream alone is only a dream. A dream you dream together is reality. </p>
      </PageWrapper>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
