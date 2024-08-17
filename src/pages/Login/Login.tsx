import { useState } from "react";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";
import { message } from "../../utils/AntdGlobal";
import login from "../../api/login";
import "./Login.scss";
import { useUserStore } from "../../store";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values: FieldType) => {
    return login(values)
      .then((res: any) => {
        if (res.code === 200) {
          useUserStore.getState().updateToken(res.data.token);
          useUserStore.getState().updateRole(res.data.role);
          message.success("登录成功");
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 1000);
          if (values.remember) {
            if (values.username && values.password) {
              localStorage.setItem("username", values.username);
              localStorage.setItem("password", values.password);
            }
          } else {
            if (localStorage.getItem("username"))
              localStorage.removeItem("username");
          }
        } else {
          message.error(res.msg);
        }
      })
      .catch(() => {
        message.error("登录失败");
      });
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values = {}) => {
    setIsLoading(true);
    handleLogin(values).finally(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="loginContainer">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, minWidth: 350 }}
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
