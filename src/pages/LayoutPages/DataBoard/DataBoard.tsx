import { Button } from "antd";
import { useSettingStore } from "../../../store";
import login from "../../../api/login";
import { message } from "../../../utils/AntdGlobal";
export default function DataBoard() {
  return (
    <div>
      <h1>数据看板</h1>
      <Button onClick={() => useSettingStore.getState().changeGlobalTheme()}>
        切换主题
      </Button>
      <Button
        onClick={() =>
          login({ username: "admin", password: 123456 }).then((res: any) => {
            if (res.code === 200) {
              message.success("请求成功");
            }
          })
        }
      >
        请求
      </Button>
    </div>
  );
}
