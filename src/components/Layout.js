import React from "react";
import Header from "./shared/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default Layout;
