import React, { Component } from "react";

import Sphere from '../../common/ui/sphere';

class SignUpSidebar extends Component {

  render() {
    return ( 
      <aside className="auth-sidebar-base">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className="row">
                <p className="sign-up-sidebar-heading text-color-green">HEALTH</p>
              </div>
              <div className="row">
                <p className="sign-up-text-small sign-up-sidebar-text-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="pl-4 pt-3">
                <Sphere type={0} sphereRad={50} width={90} height={90} />
              </div>
            </div>
          </div>
          <div className="row auth-sidebar-divider">
            
          </div>
          <div className="row">
          <div className="col-sm-12 col-md-8">
              <div className="row">
                <p className="sign-up-sidebar-heading text-color-blue">PROSPERITY</p>
              </div>
              <div className="row">
                <p className="sign-up-text-small sign-up-sidebar-text-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="pl-4 pt-3">
                <Sphere type={1} sphereRad={50} width={90} height={90}/>
              </div>
            </div>
          </div>
          <div className="row auth-sidebar-divider">
            
          </div>
          <div className="row">
          <div className="col-sm-12 col-md-8">
              <div className="row">
                <p className="sign-up-sidebar-heading text-color-pink">INSPIRATION</p>
              </div>
              <div className="row">
                <p className="sign-up-text-small sign-up-sidebar-text-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="pl-4 pt-3">
                <Sphere type={2} sphereRad={50} width={90} height={90}/>
              </div>
            </div>
          </div>
          <div className="row auth-sidebar-divider">
            
          </div>
          <div className="row">
          <div className="col-sm-12 col-md-8">
              <div className="row">
                <p className="sign-up-sidebar-heading text-color-yellow">JOY</p>
              </div>
              <div className="row">
                <p className="sign-up-text-small sign-up-sidebar-text-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="pl-4 pt-3">
                <Sphere type={3} sphereRad={50} width={90} height={90}/>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}


export default SignUpSidebar;