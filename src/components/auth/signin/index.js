import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import SignIn from './SignIn';

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));