import React from "react";

// Components
import GlobalStyles from "../assets/styles/globalStyles";
import Footer from "../components/footer";

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;
