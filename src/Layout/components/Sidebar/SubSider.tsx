import Menu from "antd/es/menu/Menu";
import { useNavigate } from "react-router-dom";
import { Layout, ConfigProvider } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import { useSettingStore } from "../../../store";

const { Sider } = Layout;

export default function SubSider() {
  const navigate = useNavigate();
  const SettingStore = useSettingStore();

  const subMenuItems = [
    {
      key: "/department/createcount",
      icon: <VideoCameraOutlined />,
      label: " 创建账号",
    },
    {
      key: "/department/adminauthority",
      icon: <VideoCameraOutlined />,
      label: " 管理员权限",
    },
  ];
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="light"
      width={254}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemMarginBlock: "25px",
              fontSize: 20,
            },
          },
        }}
      >
        <Menu
          mode="vertical"
          selectedKeys={[SettingStore.SubActiveKey]}
          items={subMenuItems}
          onClick={(e) => {
            SettingStore.updateSubActiveKey(e.key);
            navigate(e.key, { replace: true });
          }}
        />
      </ConfigProvider>
    </Sider>
  );
}
