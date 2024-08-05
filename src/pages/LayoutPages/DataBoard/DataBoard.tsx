import { Button } from "antd";
import { useSettingStore } from "../../../store";
export default function DataBoard() {
  return (
    <div>
      <h1>数据看板</h1>
      <Button onClick={() => useSettingStore.getState().changeGlobalTheme()}>
        切换主题
      </Button>
    </div>
  );
}
