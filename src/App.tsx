import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { App as AntdApp, ConfigProvider, theme } from "antd";
import AntdGlobal from "./utils/AntdGlobal.tsx";
import "./App.css";
import { useSettingStore } from "./store/setting.ts";

function App() {
  const globalThem = useSettingStore().globalTheme;
  return (
    <ConfigProvider
      theme={{
        algorithm:
          globalThem === "default"
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
        components: {
          Menu: {
            itemSelectedColor: "#0caf60",
            itemMarginBlock: "15px",
          },
        },
      }}
    >
      <AntdApp>
        <AntdGlobal />
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
