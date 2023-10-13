import { Outlet } from "react-router-dom";
import { useState } from "react";
import GlobalProvider from "../../context/Global/GlobalProvider";
import Aside from "./Aside";
import Modal from "../UI/Modal";
import LogOut from "./LogOut";
function Layout() {
  const [trigger, setTrigger] = useState(false);
  return (
    <GlobalProvider>
      <Aside setTrigger={setTrigger} />
      <Outlet />
      <Modal trigger={trigger} setTrigger={setTrigger}>
        <LogOut setTrigger={setTrigger} />
      </Modal>
    </GlobalProvider>
  );
}
export default Layout;
