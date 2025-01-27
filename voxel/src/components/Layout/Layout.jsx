// Layout.jsx
import React from "react";
import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const showServicesTitle = location.pathname === "/home";

  return (
    <>
      <Header showServicesTitle={showServicesTitle}  />
      <NavBar />
      <main style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
