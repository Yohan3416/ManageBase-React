import Menu from "antd/es/menu/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
import SubSider from "./SubSider";
const { Sider } = Layout;

export default function Siderbar() {
  const navigate = useNavigate();
  const [isOpenSub, setIsOpenSub] = useState(false);
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
          defaultSelectedKeys={["/databoard"]}
          items={items}
          onClick={(e) => {
            if (e.key === "/department") {
              setIsOpenSub(true);
            } else {
              setIsOpenSub(false);
            }
            navigate(e.key, { replace: true });
          }}
        />
      </Sider>
      {isOpenSub && <SubSider />}
    </>
  );
}
