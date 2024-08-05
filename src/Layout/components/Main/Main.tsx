import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

export default function Main() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content style={{ margin: "24px 16px 0" }}>
      <div
        style={{
          padding: 24,
          height: "100%",
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet></Outlet>
      </div>
    </Content>
  );
}
