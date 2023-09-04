import { Outlet, Navigate, useLoaderData } from "react-router-dom";
const user = {
  noAuthenticated: "noAuthenticated",
  entrant: "entrant",
  rector: "rector",
};

export function Authenticated() {
  const token = useLoaderData();
  if (token === user.noAuthenticated) return <Navigate to="/" replace={true} />;
  else return <Outlet />;
}
export function NotAuthenticated() {
  const token = useLoaderData();
  console.log(token);
  if (token === user.noAuthenticated) return <Outlet />;
  else return <Navigate to="/" replace={true} />;
}
export async function IsEntrant() {
  const token = useLoaderData();
  if (token === user.entrant) return <Outlet />;
  else return <Navigate to="/" replace={true} />;
}
export async function IsRector() {
  const token = useLoaderData();
  if (token === user.rector) return <Outlet />;
  else return <Navigate to="/" replace={true} />;
}
