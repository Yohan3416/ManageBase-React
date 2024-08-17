import Mock from "mockjs";

Mock.setup({
  timeout: "300-800",
});

const checkLogin = (config: { body: string }) => {
  const Config = JSON.parse(config.body);
  if (Config.username === "superadmin" && Config.password === "123456") {
    return {
      code: 200,
      data: {
        username: "SuperAdmin",
        token: Mock.Random.guid(),
        role: "SuperAdmin",
      },
    };
  } else if (Config.username === "admin" && Config.password === "123456") {
    return {
      code: 200,
      data: {
        username: "Admin",
        token: Mock.Random.guid(),
        role: "Admin",
      },
    };
  } else {
    return {
      code: 500,
      msg: "账号或者密码错误",
    };
  }
};

Mock.mock(/\/user\/login/, "post", checkLogin);

// // 用户相关
// Mock.mock(/\/user\/listpage/, "get", getUserList); //模拟分页查询用户信息接口
// Mock.mock(/\/user\/remove/, "get", deleteUser); //模拟删除用户信息接口
// Mock.mock(/\/user\/add/, "get", createUser); //模拟添加用户信息接口
// Mock.mock(/\/user\/edit/, "get", updateUser); //模拟编辑用户信息接口
