import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { App as AntdApp } from "antd";
import AntdGlobal from "./utils/AntdGlobal.tsx";
import "./App.css";

function App() {
  return (
    <AntdApp>
      <AntdGlobal />
      <RouterProvider router={router} />
    </AntdApp>
  );
}

export default App;
