import { Outlet } from "react-router-dom";
import Aside from "./Aside/Aside";
import { Suspense } from "react";
import Loading from "../Loading";
function Layout() {
  return (
    <>
      <Aside />
      <main className="bg-cyan-950 text-slate-50 m-0 w-full min-h-screen h-full">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
export default Layout;
