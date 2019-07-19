import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Redirect } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Tree } from "primereact/tree";
import { TreeTable } from "primereact/treetable";
import { Column } from "primereact/column";
import { PickList } from "primereact/picklist";
import { OrderList } from "primereact/orderlist";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";

export class Master extends Component {
  constructor() {
    super();
    this.state = {
      dataPenghasilan: [],
      dataAnak: [],
      dataNikah: [],
      dataRumah: [],
    };
    this.onDataSelect = this.onDataSelect.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8000/penghasilan").then(getPenghasilan => {
      this.setState({
        dataPenghasilan: getPenghasilan.data
      });
    });
    axios.get("http://localhost:8000/anak").then(getAnak => {
      this.setState({
        dataAnak: getAnak.data
      });
    });
    axios.get("http://localhost:8000/nikah").then(getNikah => {
      this.setState({
        dataNikah: getNikah.data
      });
    });
    axios.get("http://localhost:8000/rumah").then(getRumah => {
      this.setState({
        dataRumah: getRumah.data
      });
    });
    }

  findSelectedDataIndex() {
    return this.state.dataTableValue.indexOf(this.state.selectedData);
  }

  onDataSelect(e) {
    this.setState({
      displayDialog: true,
      dataTableValue: Object.assign({}, e.data)
    });
  }

  buttonAppEditPenghasilan = data => {
    var url1 = `/EditMaster_Penghasilan/${data.id}`;
    return (
      <div>
        <a>
          <Link to={url1}>
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-warning"
            />
          </Link>
        </a>
      </div>
    );
  };

  buttonAppEditAnak = data => {
    var url2 = `/EditMaster_Anak/${data.id}`;
    return (
      <div>
        <Link to={url2}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-warning"
          />
        </Link>
      </div>
    );
  };

  buttonAppEditNikah = data => {
    var url2 = `/EditMaster_Nikah/${data.id}`;
    return (
      <div>
        <Link to={url2}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-warning"
          />
        </Link>
      </div>
    );
  };

  buttonAppEditRumah = data => {
    var url2 = `/EditMaster_Rumah/${data.id}`;
    return (
      <div>
        <Link to={url2}>
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-warning"
          />
        </Link>
      </div>
    );
  };

  deleteDataPenghasilan = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/penghasilan/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };

  deleteDataAnak = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/anak/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };

  deleteDataNikah = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/nikah/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };

  deleteDataRumah = data => {
    if (window.confirm("Delete this ?")) {
      axios.delete(`http://localhost:8000/rumah/${data.id}`).then(() => {
        window.location.reload();
      });
    }
  };

  buttonAppDelPenghasilan = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-pencil"
          className="p-button-danger"
          onClick={() => this.deleteDataPenghasilan(data)}
        />
      </div>
    );
  };

  buttonAppDelAnak = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-pencil"
          className="p-button-danger"
          onClick={() => this.deleteDataAnak(data)}
        />
      </div>
    );
  };

  buttonAppDelNikah = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-pencil"
          className="p-button-danger"
          onClick={() => this.deleteDataNikah(data)}
        />
      </div>
    );
  };

  buttonAppDelRumah = data => {
    return (
      <div>
        <Button
          label="Delete"
          icon="pi pi-pencil"
          className="p-button-danger"
          onClick={() => this.deleteDataRumah(data)}
        />
      </div>
    );
  };

  render() {

    let footerPenghasilan = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left", fontSize: 15 }} className="edit-btn">
          <Link to="/AddMaster_Penghasilan">
            <Button label="Add Penghasilan" icon="pi pi-plus" />
          </Link>
        </a>
      </div>
    );
    let footerAnak = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left", fontSize: 15 }} className="edit-btn">
          <Link to="/AddMaster_Anak">
            <Button label="Add Status Anak" icon="pi pi-plus" />
          </Link>
        </a>
      </div>
    );

    let footerNikah = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left", fontSize: 15 }} className="edit-btn">
          <Link to="/AddMaster_Nikah">
            <Button label="Add Status Nikah" icon="pi pi-plus" />
          </Link>
        </a>
      </div>
    );

    let footerRumah = (
      <div className="p-clearfix" style={{ width: "100%" }}>
        <a style={{ float: "left", fontSize: 15 }} className="edit-btn">
          <Link to="/AddMaster_Rumah">
            <Button label="Add Status Rumah" icon="pi pi-plus" />
          </Link>
        </a>
      </div>
    );

    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>List Keterangan Member</h1>

          <div className="p-col-12 p-md-12">
            <DataTable
              value={this.state.dataPenghasilan}
              header="Penghasilan"
              rows={10}
              footer={footerPenghasilan}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="id" header="id" sortable={true} />
              <Column field="status" header="Status" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              <Column header="Edit" body={this.buttonAppEditPenghasilan} />
              <Column header="Delete" body={this.buttonAppDelPenghasilan} />
            </DataTable>
          </div>

          <div className="p-col-12 p-md-12">
            <DataTable
              value={this.state.dataAnak}
              header="Status Anak"
              rows={10}
              footer={footerAnak}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="id" header="id" sortable={true} />
              <Column field="status" header="Status" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              <Column header="Edit" body={this.buttonAppEditAnak} />
              <Column header="Delete" body={this.buttonAppDelAnak} />
            </DataTable>
          </div>

          <div className="p-col-12 p-md-12">
            <DataTable
              value={this.state.dataNikah}
              header="Status Nikah"
              rows={10}
              footer={footerNikah}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="id" header="id" sortable={true} />
              <Column field="status" header="Status" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              <Column header="Edit" body={this.buttonAppEditNikah} />
              <Column header="Delete" body={this.buttonAppDelNikah} />
            </DataTable>
          </div>
          
          <div className="p-col-12 p-md-12">
            <DataTable
              value={this.state.dataRumah}
              header="Status Rumah"
              rows={10}
              footer={footerRumah}
              responsive={true}
              selection={this.state.dataTableSelection}
              onSelectionChange={event =>
                this.setState({ dataTableSelection: event.value })
              }
            >
              <Column field="id" header="id" sortable={true} />
              <Column field="status" header="Status" sortable={true} />
              <Column field="point" header="Point" sortable={true} />
              <Column header="Edit" body={this.buttonAppEditRumah} />
              <Column header="Delete" body={this.buttonAppDelRumah} />
            </DataTable>
          </div>

        </div>
      </div>
    );
  }
}