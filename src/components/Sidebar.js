import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
        <div>
          <aside className="main-sidebar">
            <section className="sidebar">
              <ul className="sidebar-menu" data-widget="tree">
                <li><Link to="/dashboard"><i className="fa fa-tachometer" /> <span>Dashboard</span></Link></li>
                <li><Link to="/data"><i className="fa fa-database" /> <span>Data</span></Link></li>
                <li><Link to="/listproduk"><i className="fa fa-table" /> <span>List Produk</span></Link></li>
                <li><Link to="/formproduk"><i class="fa fa-plus" aria-hidden="true"></i> <span>Tambah Produk</span></Link></li>
              </ul>
            </section>
          </aside>
        </div>
    )
  }
}
