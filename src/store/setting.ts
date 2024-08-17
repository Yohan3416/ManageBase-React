import { create } from "zustand";
import { produce } from "immer";
// import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type Action = {
  changeGlobalTheme: () => void;
  updateActiveKey: (activeKey: string) => void;
  updateIsOpenSubMenu: (IsOpenSubMenu: boolean) => void;
  updateSubActiveKey: (SubActiveKey: string) => void;
};

interface State {
  globalTheme: string;
  activeKey: string;
  IsOpenSubMenu: boolean;
  SubActiveKey: string;
}

// 创建带有Immer中间件的zustand存储
export const useSettingStore = create<State & Action>()(
  // 这里使用了immer进行包裹住“设置函数”（setter）
  persist(
    (set) => ({
      globalTheme: "default",
      activeKey: "/databoard",
      IsOpenSubMenu: false,
      SubActiveKey: "/department/createcount",
      changeGlobalTheme: () =>
        set(
          produce((state) => {
            state.globalTheme =
              state.globalTheme === "default" ? "dark" : "default";
          }),
        ),
      updateActiveKey: (activeKey: string) =>
        set(
          produce((state) => {
            state.activeKey = activeKey;
          }),
        ),
      updateIsOpenSubMenu: (IsOpenSubMenu: boolean) =>
        set(
          produce((state) => {
            state.IsOpenSubMenu = IsOpenSubMenu;
          }),
        ),
      updateSubActiveKey: (SubActiveKey: string) =>
        set(
          produce((state) => {
            state.SubActiveKey = SubActiveKey;
          }),
        ),
    }),
    {
      name: "setting-storage",
    },
  ),
);
