import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

export class AdminLogin extends Component {

    state = {
      statusRedirect: false,
    }

    login = (e) => {
      var username = e.username.value;
      var password = e.password.value;
      axios.post('http://localhost:8000/loginadmin', {
        inputUsername: username,
        inputPassword: password
      }).then((Response) => {
        // var data = Response.userId;
        // console.log(data);
        // cookies.set('userID', data, {path: '/'});
        this.setState({
          statusRedirect: true
        })
      })
    }

  render() {

    if(this.state.statusRedirect === true){
      return <Redirect to="/Dashboard" />
    }

    return (
      <div className="login-box">
        <div className="login-logo">
          <Link to="/"><b>Admin Panel Golf</b></Link>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="" method="post">
            <div className="form-group has-feedback">
              <input ref="username" type="text" className="form-control" placeholder="Username" />
              <span className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input ref="password" type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-8" >
                <div className="checkbox icheck">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>
              </div>
              <div className="col-xs-4">
                <button type="button" onClick={() => this.login(this.refs)} className="btn btn-primary btn-block btn-flat">Log In</button>
              </div>
            </div>
          </form>
        </div>
      </div>    
    )
  }
}
