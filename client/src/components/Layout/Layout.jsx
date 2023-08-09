import { Outlet } from "react-router-dom";
import Aside from "./Aside";
function Layout() {
  return (
    <>
      <aside>
        <Aside />
      </aside>
      <main className="bg-cyan-950 text-slate-50 m-0 w-full min-h-screen h-full">
        <Outlet />
      </main>
    </>
  );
}
export default Layout;