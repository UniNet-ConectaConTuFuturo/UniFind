import { get } from "../api/api";
export default async function getAuth() {
  try {
    return (await get("/auth")).user;
  } catch (error) {
    console.log(error);
  }
}
