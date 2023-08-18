import { post } from "./api";
export default async function getAuth() {
  try {
    const token = localStorage.getItem("TokenUniNet");
    if (typeof token !== "string") return "noAuthenticated";
    const res = await post("/auth", { token });
    const { user } = res;
    return user;
  } catch (error) {
    console.log(error);
  }
}
