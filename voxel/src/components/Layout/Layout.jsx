// Layout.jsx
import React from "react";
import Header from "../Header/Header.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const showServicesTitle = location.pathname !== "/contacto";

  return (
    <>
      <NavBar />
      <Header showServicesTitle={showServicesTitle}  />
      <main style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
