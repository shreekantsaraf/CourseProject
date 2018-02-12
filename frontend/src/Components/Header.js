import React, {Component} from 'react';
import  {mainStore, isUserAuthenticated, isDataActive, isDataActiveCheckOnlyData} from '../mainStore';
import { Link } from "react-router-dom";
import LoginUsingFireBase , {LogoutUsingFireBase} from '../Auth/GoogAuth';
import isUserAuthenticatedInGoogle, {signOutUserFromGoogle} from '../Auth/QueryGoogAuth';
import logo from './logo.svg';
class Header extends Component
{
  constructor(props)
  {
    super(props);
    console.log('Header:: constructor  time - ', Date.now() );
    
  }

  componentWillMount()
  {
    isUserAuthenticatedInGoogle();
  }
  doLoginUsingFireBase()
  {
    console.log('Header component::doLogin-- before Login call');
    LoginUsingFireBase();
    //after loging call
    console.log('Header component::doLogin-- after loging call  user is -', mainStore.getState().login.payLoad);
    
  }
  doLogout()
  {
    console.log('Header component::doLogout-- before Logout call');
    LogoutUsingFireBase();
    //after loging call
    console.log('Header component::doLogout-- after logout call  user is -', mainStore.getState().login.payLoad);
    
  }
  renderPreLoader(){
    var toRet = <div></div>;
    if(isUserAuthenticated() && !isDataActiveCheckOnlyData())
    {
      toRet =  <div class="progress">
                  <div class="indeterminate"></div>
                </div>;
    }
    return toRet;
  }
  // <Link to={{pathname : (isDataActive())  ? '/MyItems': '/', state:{id: "0"}}}>New Item</Link>
  
  doCheckLoggingUser()
  {
    isUserAuthenticatedInGoogle();
  }


  doLogoutGoogle()
  {
    signOutUserFromGoogle();
  }
  renderContent(){
    console.log('in Header component renderContent  '+ mainStore.getState().login.payLoad);
    if(!isUserAuthenticated()){
            return [
              <li key='10001'>
               <a href='/SignIn'>Login With Google</a>
              </li>
              // <li>
              // <a id='btnLoginUsingFireBase' onClick={this.doLoginUsingFireBase.bind(this)}>Login FireBase</a>
              // </li>,
              // <li key='30003'>
              //   <Link to={'/UserInfo'}>User Info</Link>
              // </li>,
              // <li key='20002'>
              // <a id='btnCheckLoggingUser' onClick={this.doCheckLoggingUser.bind(this)}>Demand User Info</a>
              // </li>
           ];
          }
          else {
            return [
              // `<li key='1'>

              //   <Link to={isDataActive()  ? '/MyItems/0': '/'}>MyItems</Link>
              // </li>,`
              <li key='2'>
                <Link to={isDataActive()  ? '/MyItems/0': '/'}>MyItems</Link>
              </li>,
              // <li key='3'><Link to={
              //   isDataActive() ? '/Settings': '/'}>Dashboard</Link></li>,
                // <li key='10'><Link to={'/About'}>About</Link></li>,
                <li key='30003'>
                <Link to={'/UserInfo'}>User Info</Link>
                </li>,
                // <li key='100003'>
                //   <a id='btnCheckLoggingUser' onClick={this.doCheckLoggingUser.bind(this)}>Demand User Info</a>
                // </li>,
                // <li key='4'><a id='btnLogout' onClick={this.doLogout.bind(this)}>Logout F</a></li>,
                <li key='44'><a id='btnLogoutG' onClick={this.doLogoutGoogle.bind(this)}>Logout</a></li>
              ];
          }
  }

    render(){
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top">
            <div className="nav-wrapper">
              <a className="myleftlogo">
              <img src='favicon.ico' className="App-logo" alt="logo" />

              {/* <i className="large material-icons">brightness_7</i> */}
              </a>
              <ul id="nav-mobile" className="right">
                {this.renderContent()}
              </ul>
            </div>
              {this.renderPreLoader()}
          </nav>
        );
    }
}

export default Header;