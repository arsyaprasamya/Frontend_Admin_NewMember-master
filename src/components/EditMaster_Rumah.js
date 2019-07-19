import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export class EditMaster_Rumah extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      status: '',
      point: ''
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/rumahedit/${this.state.id}`).then(getData => {
      this.setState({
        id: getData.data,
        status: getData.data,
        point: getData.data
      });
    });
  }

  saveData() {
    axios
      .post(`http://localhost:8000/rumahedit/${this.state.id}`)
      .then(postData => {
        this.setState({
          id: postData.data,
          status: postData.data,
          point: postData.data
        });
      });
  }

  render() {
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Edit Data Rumah</h1>
        </div>
        <div className="p-col-6">
          <div className="card card-w-title">
            <h4>Rumah</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Status" type="text" />
              </div>
              <div className="p-col-12 p-md-6">
                <InputText placeholder="Point" type="number" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-col-12">
          <div className="p-col-3">
            <Button
              label="Update"
              icon="pi pi-pencil"
              onClick={this.saveData()}
            />
          </div>
        </div>
      </div>
    );
  }
}