import React from "react";
import Footer from "./shared/Footer/Footer";
import Header from "./shared/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
