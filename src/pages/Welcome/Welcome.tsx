import { useEffect } from "react";
import { message } from "../../utils/AntdGlobal.tsx";
import { useUserStore } from "../../store/user.ts";

export function Welcome() {
  useEffect(() => {
    message.success("欢迎来到react-ts-vite-antd-admin");
  }, []);
  const { userInfo } = useUserStore();
  return (
    <div>
      <h1>Welcome</h1>
      <div>{userInfo.username}</div>
    </div>
  );
}
