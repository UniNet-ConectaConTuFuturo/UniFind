import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Modal from "../UI/Modal";
import { useState } from "react";
import LogOut from "./LogOut";
function Layout() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <Aside setTrigger={setTrigger} />
      <Outlet />
      <Modal trigger={trigger} setTrigger={setTrigger}>
        <LogOut setTrigger={setTrigger} />
      </Modal>
    </>
  );
}
export default Layout;
