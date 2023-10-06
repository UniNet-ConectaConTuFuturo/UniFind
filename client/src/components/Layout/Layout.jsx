import { Outlet } from "react-router-dom";
import Aside from "./Aside/Aside";
import Modal from "../UI/Modal"
import { useState } from "react";
function Layout() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <Aside setTrigger={setTrigger}/>
      <main className="bg-cyan-950 text-slate-50 m-0 w-full min-h-screen h-full">
        <Outlet />
      </main>
      <Modal trigger={trigger} setTrigger={setTrigger}>

      </Modal>
    </>
  );
}
export default Layout;
