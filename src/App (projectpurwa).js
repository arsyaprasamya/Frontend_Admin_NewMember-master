import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './component/Login';
import Dashboard from './component/Dashboard';
import ListProduk from './component/Listproduk';
import FormProduk from './component/formProduk';
import editForm from './component/editForm';
import Data from './component/Data';
import Logout from './component/Logout';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/data" component={Data} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/listproduk" component={ListProduk} />
        <Route path="/formproduk" component={FormProduk} />
        <Route path="/editform" component={editForm} />
        <Route path="/logout" component={Logout} />
      </div>
    )
  }
}

export default App;
