import React, { Component } from 'react';
import classNames from 'classnames';

export class AppInlineProfile extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({expanded: !this.state.expanded});
        event.preventDefault();
    }

    // refreshPage(){ 
    //     window.location.reload(); 
    // }

    logOut() { 
        window.location = "/";
    }

    render() {
        return  (
            <div className="profile">
                <div>
                    {/* <img src="assets/layout/images/profile.png" alt="" /> */}
                </div>
                <button className="p-link profile-link" onClick={this.onClick}>
                    <span className="username">Settings</span>
                    <i className="pi pi-fw pi-cog"/>
                </button>
                <ul className={classNames({'profile-expanded': this.state.expanded})}>
                    <li><button className="p-link"><i className="pi pi-fw pi-user"/><span>Account</span></button></li>
                    {/* <li><button className="p-link" type="button" onClick={ this.refreshPage }> <i className="pi pi-fw pi-user"/><span>Reload</span> </button></li> */}
                    <li><button className="p-link" type="button" onClick={ this.logOut }> <i className="pi pi-fw pi-logout"/><span>Logout</span> </button></li>
                </ul>
            </div>
        );
    }
}