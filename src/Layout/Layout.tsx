import React from "react";
import { Layout } from "antd";
import Siderbar from "./components/Sidebar/Sidebar";
import HeaderLayout from "./components/Header/Header";
import Main from "./components/Main/Main";
import FooterLayout from "./components/Footer/Footer";
import "./Layout.scss";

const MyLayout: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <Layout style={{ minHeight: "94vh" }}>
        <Siderbar />
        <Layout>
          <Main />
          <FooterLayout />
        </Layout>
      </Layout>
    </>
  );
};

export default MyLayout;
