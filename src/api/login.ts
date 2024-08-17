import request from "../utils/request";

const login = (data: object) => {
  return new Promise((resolve, reject) => {
    request
      .post("/user/login", data)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export default login;
