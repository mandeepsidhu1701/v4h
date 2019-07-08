import React, { Component } from "react";

class ErrorBar extends Component {

  render () {
    return (
      <div className="col-md-12">
        <p className="sign-up-error-text text-medium">
          <strong>Error:</strong> {this.props.error}
        </p>
      </div>
    )
  }
}

export default ErrorBar;