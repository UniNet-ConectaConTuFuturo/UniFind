import { post } from "./api";
export default async function getAuth() {
  try {
    const token = localStorage.getItem("TokenUniNet");
    if (typeof token === "undefined") return "noAuthenticated";
    const res = await post("/auth", {
      token: localStorage.getItem("TokenUniNet"),
    });
    const { user } = await res.json();
    return user;
  } catch (error) {
    console.log(error);
  }
}
