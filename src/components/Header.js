import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const { Header } = Layout;
export default function HeaderComponent() {
  return (
    <Layout>
      <div>
        <Header className="header">
          <MenuFoldOutlined />

          <ul className="headerul">
            <li className="header-li"><Link to="/">Home</Link></li>
            <li className="header-li"><Link to="/products">Products</Link></li>
            <li className="header-li"><Link to="/cart">Cart</Link></li>
            {/* <li className="header-li"><Link to="/product/:id"></Link></li> */}
          </ul>
        </Header>
      </div>
    </Layout>
  );
}
