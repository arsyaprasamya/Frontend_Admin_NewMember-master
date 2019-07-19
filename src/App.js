import React, { Component } from "react";
import { Route } from "react-router-dom";
import { AdminLogin } from "./components/AdminLogin";
import { Dashboard } from "./components/Dashboard";
import { DataMember } from "./components/DataMember";
import { DataNonMember } from "./components/DataNonMember";
import { AddMember } from "./components/AddMember";
import { EditMember } from "./components/EditMember";
import { Registrasi } from "./components/Registrasi";
import { Master } from "./components/Master";
import { AddMaster_Penghasilan } from "./components/AddMaster_Penghasilan";
import { AddMaster_Anak } from "./components/AddMaster_Anak";
import { AddMaster_Nikah } from "./components/AddMaster_Nikah";
import { AddMaster_Rumah } from "./components/AddMaster_Rumah";
import { EditMaster_Penghasilan } from "./components/EditMaster_Penghasilan";
import { EditMaster_Anak } from "./components/EditMaster_Anak";
import { EditMaster_Nikah } from "./components/EditMaster_Nikah";
import { EditMaster_Rumah } from "./components/EditMaster_Rumah";
import { AdminLogout } from "./components/AdminLogout";

class App extends Component {
  
  render() {
    
    return (

      <div>
        <div className="layout-main">
          <Route path="/" component={AdminLogin} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/data_member" component={DataMember} />
          <Route path="/data_nonmember" component={DataNonMember} />
          <Route path="/AddMember" component={AddMember} />
          <Route path="/EditMember" component={EditMember} />
          <Route path="/ListRegistrasi" component={Registrasi} />
          <Route path="/Master" component={Master} />
          <Route path="/AddMaster_Penghasilan" component={AddMaster_Penghasilan} />
          <Route path="/AddMaster_Anak" component={AddMaster_Anak} />
          <Route path="/AddMaster_Nikah" component={AddMaster_Nikah} />
          <Route path="/AddMaster_Rumah" component={AddMaster_Rumah} />
          <Route path="/EditMaster_Penghasilan" component={EditMaster_Penghasilan} />
          <Route path="/EditMaster_Anak" component={EditMaster_Anak} />
          <Route path="/EditMaster_Nikah" component={EditMaster_Nikah} />
          <Route path="/EditMaster_Rumah" component={EditMaster_Rumah} />
          <Route path="/AdminLogout" component={AdminLogout} />
        </div>

        {/* <AppFooter /> */}

        <div className="layout-mask" />
      </div>
    );
  }
}

export default App;
