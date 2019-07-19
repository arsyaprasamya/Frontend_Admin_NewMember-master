import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

export class AdminLogout extends Component {
  render() {

    const cookies = new Cookies();
    cookies.remove('userID');

    if(cookies.get('userID') === undefined){
      return <Redirect to="/" />
    }

    return (
      <div>
        
      </div>
    )
  }
}
