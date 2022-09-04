import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
