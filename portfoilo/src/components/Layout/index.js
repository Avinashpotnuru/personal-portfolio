import React from "react";

//  import components

import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen overflow-y-auto ">
      <Header />
      <main>{children}</main>
      <div className="self-end">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
