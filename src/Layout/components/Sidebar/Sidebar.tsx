import Menu from "antd/es/menu/Menu";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useSettingStore } from "../../../store";
import SubSider from "./SubSider";
const { Sider } = Layout;

export default function Siderbar() {
  const SettingStore = useSettingStore();
  const navigate = useNavigate();
  const items = [
    {
      type: "group",
      label: "导航",
      children: [
        {
          key: "/databoard",
          icon: <VideoCameraOutlined />,
          label: "数据看板",
        },
        {
          key: "/cashier",
          icon: <UploadOutlined />,
          label: "收银台",
        },
        {
          key: "/bookstorage",
          icon: <VideoCameraOutlined />,
          label: "书籍入库",
        },
        {
          key: "/storemanage",
          icon: <VideoCameraOutlined />,
          label: "库存管理",
        },
        {
          key: "/OrderManage",
          icon: <VideoCameraOutlined />,
          label: "订单管理",
        },
      ],
    },
    {
      type: "group",
    },
    {
      type: "group",
      label: "工作台",
      children: [
        {
          key: "/department",
          icon: <VideoCameraOutlined />,
          label: "部门管理",
        },
        {
          key: "/logrecord",
          icon: <VideoCameraOutlined />,
          label: "日志记录",
        },
      ],
    },
  ];

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        theme="light"
        width={254}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <Menu
          mode="vertical"
          items={items}
          selectedKeys={[SettingStore.activeKey]}
          onClick={(e) => {
            SettingStore.updateActiveKey(e.key);
            if (e.key === "/department") {
              SettingStore.updateIsOpenSubMenu(true);
              SettingStore.updateSubActiveKey("/department/createcount");
            } else {
              SettingStore.updateIsOpenSubMenu(false);
            }
            navigate(e.key, { replace: true });
          }}
        />
      </Sider>
      {SettingStore.IsOpenSubMenu && <SubSider />}
    </>
  );
}
