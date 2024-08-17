// 引入zustand库和Immer中间件
import { create } from "zustand";
import { persist } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";
import { produce } from "immer";

type Action = {
  updateToken: (token: string) => void;
  updateRole: (role: string) => void;
  updateUserName?: (username: string) => void;
};

interface State {
  username: string;
  role: string;
  token: string;
}

export const useUserStore = create<State & Action>()(
  // 这里使用了immer进行包裹住“设置函数”（setter）
  persist(
    (set) => ({
      username: "默认名称",
      role: "admin",
      token: "",
      updateToken: (token) =>
        set(
          produce((state) => {
            localStorage.setItem("token", token);
            state.token = token;
          }),
        ),
      updateRole: (role) =>
        set(
          produce((state) => {
            state.role = role;
          }),
        ),
      updateUsername: (username: string) =>
        set(
          produce((state) => {
            state.username = username;
          }),
        ),
    }),
    {
      name: "user-storage",
    },
  ),
);
