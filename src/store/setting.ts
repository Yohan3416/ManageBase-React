import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Action = {
  changeGlobalTheme: () => void;
};

interface State {
  globalTheme: string;
}

// 创建带有Immer中间件的zustand存储
export const useSettingStore = create<State & Action>()(
  // 这里使用了immer进行包裹住“设置函数”（setter）
  immer((set) => ({
    globalTheme: "default",
    changeGlobalTheme: () =>
      set((state) => {
        state.globalTheme =
          state.globalTheme === "default" ? "dark" : "default";
      }),
  })),
);
