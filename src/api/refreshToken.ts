import request from "../utils/request";

export function refreshToken() {
  return request.get<{ token: string }>("/refreshToken");
}
