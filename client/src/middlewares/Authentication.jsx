import { Outlet, Navigate, useLoaderData } from "react-router-dom";
import userOptions from "../modelos/userOptions";

export function Authenticated() {
  const token = useLoaderData();
  if (token === userOptions.noAuthenticated)
    return <Navigate to="/" replace={true} />;
  else return <Outlet />;
}
export function NotAuthenticated() {
  const token = useLoaderData();
  console.log(token);
  if (token === userOptions.noAuthenticated) return <Outlet />;
  else return <Navigate to="/" replace={true} />;
}
export async function IsEntrant() {
  const token = useLoaderData();
  if (token === userOptions.entrant) return <Outlet />;
  else return <Navigate to="/" replace={true} />;
}
export async function IsRector() {
  const token = useLoaderData();
  if (token === userOptions.rector) return <Outlet />;
  else return <Navigate to="/" replace={true} />;
}
