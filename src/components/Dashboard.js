import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "../AppTopbar";
import { AppMenu } from "../AppMenu";
import { AppInlineProfile } from "../AppInlineProfile";
import { ScrollPanel } from "primereact/components/scrollpanel/ScrollPanel";
import { Redirect } from 'react-router-dom';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "../layout/layout.css";
import "../App.css";
// import Cookies from 'universal-cookie';

// const cookies = new Cookies();

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "dark",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
    setTimeout(() => {
      this.layoutMenuScroller.moveBar();
    }, 500);
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",
        command: () => {
          window.location = "/Dashboard";
        }
      },
      {
        label: "Master",
        icon: "pi pi-fw pi-chart-bar",
        to: "/Master"
      },
      {
        label: "Registrasi",
        icon: "pi pi-fw pi-chart-bar",
        to: "/ListRegistrasi"
      },
      {
        label: "Data",
        icon: "pi pi-fw pi-bookmark",
        items: [
          // {label: 'Admin User', icon: 'pi pi-fw pi-user' },
          { label: "Member", icon: "pi pi-fw pi-users", to: "/data_member" },
          {
            label: "Non Member",
            icon: "pi pi-fw pi-file",
            to: "/data_nonmember"
          }
        ]
      },
      // {
      //   label: "About Aplication",
      //   icon: "pi pi-fw pi-question"
      // }
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }

  render() {
    // if(cookies.get('userID') === undefined){
    //   return <Redirect to="/" />
    // }

    let logo =
      this.state.layoutColorMode === "dark"
        ? "assets/layout/images/logo-white.svg"
        : "assets/layout/images/logo.svg";
    let wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });
    let sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark"
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
      <AppTopbar onToggleMenu={this.onToggleMenu} />

      <div
        ref={el => (this.sidebar = el)}
        className={sidebarClassName}
        onClick={this.onSidebarClick}
      >
        <ScrollPanel
          ref={el => (this.layoutMenuScroller = el)}
          style={{ height: "100%" }}
        >
          <div className="layout-sidebar-scroll-content">
            <div className="layout-logo">
              {/* <img alt="Logo" src={logo} /> */}
              <h3 style={{ color: "white" }}>Registrasi Golf</h3>
              <br />
            </div>
            <AppInlineProfile />
            <AppMenu
              model={this.menu}
              onMenuItemClick={this.onMenuItemClick}
            />
          </div>
        </ScrollPanel>
      </div>
      <div className="p-grid p-fluid dashboard">
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title"> Admin Users</span>
            <span className="detail">Number of visitors</span>
            <span className="count visitors">5</span>
          </div>
        </div>
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title">List Data Member</span>
            <span className="detail">anggota yang menjadi member</span>
            <span className="count purchases">534</span>
          </div>
        </div>
        <div className="p-col-12 p-lg-4">
          <div className="card summary">
            <span className="title">List Data Non Member</span>
            <span className="detail">anggota yang belum menjadi member</span>
            <span className="count revenue">30</span>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
