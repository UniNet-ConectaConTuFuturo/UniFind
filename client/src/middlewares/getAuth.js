import { get } from "../api/api";
export default async function getAuth() {
  try {
    const token = localStorage.getItem("TokenUniNet");
    if (!token) return "noAuthenticated";
    return (await get("/auth", { token })).user;
  } catch (error) {
    console.log(error);
  }
}
