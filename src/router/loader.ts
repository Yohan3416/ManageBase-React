import { redirect } from "react-router-dom";
export function Loader() {
  const tk = localStorage.getItem("token");
  if (tk) {
    return null;
  } else {
    return redirect("/login");
  }
}
