import React, { Component } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { RadioButton } from "primereact/radiobutton";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { ListBox } from "primereact/listbox";
import { Rating } from "primereact/rating";
import { ColorPicker } from "primereact/colorpicker";
import { Editor } from "primereact/editor";
import { ToggleButton } from "primereact/togglebutton";
import { SelectButton } from "primereact/selectbutton";

export class AddMember extends Component {
  constructor() {
    super();
    this.state = {
      date1: null,
      radioValue: null,
      dropdownPenghasilan: [],
      dropdownNikah: [],
      dropdownAnak: [],
      dropdownRumah: [],
      point_penghasilan: [],
      id: null,
      nama: null,
      id_kawin: null,
      id_penghasilan: null,
      id_rumah: null,
      id_anak: null,
      tempat_lahir: null,
      tanggal_lahir: null,
      alamat: null,
      status_member: null
    };
  }
  componentDidMount() {
    axios.get("http://localhost:8000/penghasilan").then(getdata => {
      this.setState({
        dropdownPenghasilan: getdata.data
      });
    });
    axios.get("http://localhost:8000/nikah").then(getdata => {
      this.setState({
        dropdownNikah: getdata.data
      });
    });
    axios.get("http://localhost:8000/anak").then(getdata => {
      this.setState({
        dropdownAnak: getdata.data
      });
    });
    axios.get("http://localhost:8000/rumah").then(getdata => {
      this.setState({
        dropdownRumah: getdata.data
      });
    });
  }
  componentDidUpdate() {
    axios
      .get(
        `http://localhost:8000/point_penghasilan/${this.state.id_penghasilan}`
      )
      .then(getdata => {
        this.setState({
          point_penghasilan: getdata.data
        });
      });
  }
  kirimData = () => {
    // axios
    //   .get(
    //     `http://localhost:8000/point_penghasilan/${this.state.id_penghasilan}`
    //   )
    //   .then(getdata => {
    //     this.setState({
    //       point_penghasilan: getdata.data
    //     });
    //   });
    var nilai = this.state.point_penghasilan[0];
    var Boint = nilai.point;
    console.log("ini dia ", this.state.point_penghasilan);
    console.log("ini ", Boint + 100);
    //e.preventDefault();

    // let dataForm = new FormData();
    // dataForm.append("id", this.state.id);
    // dataForm.append("nama", this.state.nama);
    // dataForm.append("id_kawin", this.state.id_kawin);
    // dataForm.append("id_penghasilan", this.state.id_penghasilan);
    // dataForm.append("id_rumah", this.state.id_rumah);
    // dataForm.append("id_anak", this.state.id_anak);
    // dataForm.append("tanggal_lahir", this.state.tanggal_lahir);
    // dataForm.append("tanggal_lahir", this.state.tanggal_lahir);
    // dataForm.append("alamat", this.state.alamat);
    // dataForm.append("status_member", this.state.status_member);
    // axios.post("http://localhost:8000/add", dataForm);
    // window.location.href = "/ListRegistrasi";
  };

  render() {
    // console.log("point = ", this.state.point_penghasilan);
    return (
      <div className="p-grid p-fluid">
        <div className="p-col-12 card card-w-title">
          <h1>Add Data Member</h1>
        </div>
        <div className="p-col-12">
          <div className="card card-w-title">
            <h4>Personal</h4>
            <div className="p-grid">
              <div className="p-col-12 p-md-4 form-group">
                <label>Nama</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Nama"
                  type="text"
                  value={this.state.nama}
                  onChange={e => this.setState({ nama: e.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Alamat</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Alamat"
                  type="text"
                  value={this.state.alamat}
                  onChange={e => this.setState({ alamat: e.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Tempat Lahir</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <InputText
                  className="form-control"
                  placeholder="Tempat Lahir"
                  type="text"
                  value={this.state.tempat_lahir}
                  onChange={e => this.setState({ tempat_lahir: e.value })}
                />
              </div>
              <div className="p-col-12 p-md-4 form-group">
                <label>Tanggal Lahir</label>
              </div>
              <div className="p-col-12 p-md-6 form-group">
                <Calendar
                  className="form-control"
                  placeholder="Tanggal Lahir"
                  dateFormat="yy/mm/dd"
                  value={this.state.tanggal_lahir}
                  onChange={e => this.setState({ tanggal_lahir: e.value })}
                />
              </div>
            </div>
            <div className="p-col-12 p-md-4 form-group">
              <label>Penghasilan</label>
            </div>
            <div className="p-col-12 p-md-6 form-group">
              <select
                value={this.state.id_penghasilan}
                onChange={e =>
                  this.setState({
                    id_penghasilan: e.target.value,
                    date1: e.target.point,
                    validationError:
                      e.target.value == "" ? "pilih penghasilan" : ""
                  })
                }
                placeholder="pilih penghasilan"
                style={{
                  width: "100%",
                  padding: "5px",
                  borderRadius: "5px",
                  height: "35px"
                }}
              >
                {this.state.dropdownPenghasilan.map((item, ind) => (
                  <option
                    key={ind}
                    value={item.id}
                    point={item.point}
                    // onChange={e =>
                    //   (this.nilai = parseInt(this.nilai) + parseInt(item.point))
                    // }
                  >
                    {item.status}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-col-12 p-md-6 form-group">
              <select
                value={this.state.id_rumah}
                onChange={e =>
                  this.setState({
                    id_rumah: e.target.value,
                    validationError:
                      e.target.value == "" ? "pilih status rumah" : ""
                  })
                }
                placeholder="pilih status rumah"
                style={{
                  width: "100%",
                  padding: "5px",
                  borderRadius: "5px",
                  height: "35px"
                }}
              >
                {this.state.dropdownRumah.map((item, ind) => (
                  <option key={ind} value={item.id}>
                    {item.status}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-col-12 p-md-6 form-group">
              <select
                value={this.state.id_kawin}
                onChange={e =>
                  this.setState({
                    id_kawin: e.target.value,
                    validationError:
                      e.target.value == "" ? "pilih Status Nikah" : ""
                  })
                }
                placeholder="pilih Status Nikah"
                style={{
                  width: "100%",
                  padding: "5px",
                  borderRadius: "5px",
                  height: "35px"
                }}
              >
                {this.state.dropdownNikah.map((item, ind) => (
                  <option key={ind} value={item.id}>
                    {item.status}
                  </option>
                ))}
              </select>
            </div>
            <div className="p-col-12 p-md-6 form-group">
              <select
                value={this.state.id_anak}
                onChange={e =>
                  this.setState({
                    id_anak: e.target.value,
                    validationError:
                      e.target.value == "" ? "pilih Status Anak" : ""
                  })
                }
                placeholder="pilih Status Anak"
                style={{
                  width: "100%",
                  padding: "5px",
                  borderRadius: "5px",
                  height: "35px"
                }}
              >
                {this.state.dropdownAnak.map((item, ind) => (
                  <option key={ind} value={item.id}>
                    {item.status}
                  </option>
                ))}
              </select>
            </div>
            {/* ================ */}
            <div className="p-col-3">
              <Button
                label="Save"
                icon="pi pi-plus"
                onClick={() => this.kirimData()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
