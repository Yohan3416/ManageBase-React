import { Layout, theme } from "antd";

const { Header } = Layout;
export default function HederLayout() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{ padding: 0, background: colorBgContainer, minHeight: "6vh" }}
    ></Header>
  );
}
