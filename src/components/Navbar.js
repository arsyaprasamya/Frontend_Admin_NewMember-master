import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Logo from './img/myAvatar.png';

export default class componentName extends Component {

  state = {
    data: []
  }

  componentWillMount(){
    axios.get('http://localhost:8000/profileadmin')
    .then((ambilData) => {
      this.setState({
        data: ambilData.data
      })
      console.log(this.state.data);
    })
  }

  render() {

    const dataadmin = this.state.data.map((item, index) => {
      var nama = item.nama_lengkap;

      return <span className="hidden-xs">{nama}</span>
    })

    const dropdown = this.state.data.map((item, index) => {
      var nama = item.nama_lengkap;
      var role = item.role;

      return <p>{nama} - {role}</p>
    })

    return (
      <div>
        <header className="main-header">
          <Link to="/dashboard" className="logo">
            <span className="logo-mini"><b>C</b>P<b>A</b></span>
            <span className="logo-lg"><b>Admin Panel</b></span>
          </Link>
          <nav className="navbar navbar-static-top" role="navigation">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span> Toggle</span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src={Logo} className="user-image" alt="User Image" />
                    {dataadmin}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src={Logo} className="img-circle" alt="User Image" />
                      {dropdown}
                    </li>
                    <li className="user-footer">
                      <div className="pull-right">
                        <Link to="/logout" className="btn btn-default btn-flat">Sign out</Link>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
