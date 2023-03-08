import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: { children: any }) => <div>{children}</div>;
const BasicLayout = ({ component: Component, ...rest }: { component: any }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Header />
          <Component {...props} />
          <Footer />
        </Layout>
      )}
    />
  );
};

export default BasicLayout;
