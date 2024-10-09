import React, { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider, { ThemeContext } from "../../contexts/ThemeContext";

const Inner = ({children}) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className="container" data-theme={darkTheme ? "dark" : "light"}>
      <Header/>
        {children}
      <Footer />
    </div>
  );
};

const Layout = (props) => {
  return (
    <ThemeProvider>
      <Inner {...props} />
    </ThemeProvider>
  );
}

export default Layout;
