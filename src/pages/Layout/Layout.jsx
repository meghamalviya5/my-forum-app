import React from "react";
import { Outlet } from "react-router-dom";
import NavSideBar from "../../components/NavSideBar/NavSideBar";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-div">
      <div className="grid-container">
        <NavSideBar className="nav-sidebar1" />
        <Outlet className="main-area" />
        <FilterSideBar className="filter-sidebar2" />
      </div>
    </div>
  );
};

export default Layout;
