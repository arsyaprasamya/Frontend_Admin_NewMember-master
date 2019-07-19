import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";

import { DataView, DataViewLayoutOptions } from "primereact/dataview";

export class Registrasi extends Component {
  constructor() {
    super();
    this.state = {
      dataTable: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/").then(getdata => {
      this.setState({
        dataTable: getdata.data
      });
    });
  }

  render() {
    let btnAdd = (
      <div className="p-clearfix" style={{ width: "15%" }}>
        <Link to="/AddMember">
          <Button label="Add Member" icon="pi pi-plus" />
        </Link>
      </div>
    );
    const mem = this.state.dataTable.map(members => {
      if (members.member == 0 ? "Yes" : "No");
      console.log(members.member);
    });
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card card-w-title">
            <h1>Daftar Registrasi Customers</h1>
            <DataTable
              value={this.state.dataTable}
              paginatorPosition="both"
              selectionMode="single"
              header={btnAdd}
              paginator={true}
              rows={10}
              // footer={footer}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="nama" header="Nama" sortable={true} />
              <Column field="lahir" header="Tempat Lahir" sortable={true} />
              <Column field="birth" header="Tgl Lahir" sortable={true} />
              <Column field="alamat" header="Alamat" sortable={true} />
              <Column field="member" header="Status Member" sortable={true} />
              <Column
                field="penghasilan"
                header="Penghasilan"
                sortable={true}
              />
              <Column field="rumah" header="Rumah" sortable={true} />
              <Column field="nikah" header="Status" sortable={true} />
              <Column field="anak" header="Anak" sortable={true} />
              <Column header="Action" value="detail" />
            </DataTable>
          </div>
        </div>
      </div>
    );
  }
}
