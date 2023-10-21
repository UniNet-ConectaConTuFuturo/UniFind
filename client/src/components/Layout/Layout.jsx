import { Outlet, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Aside from "./Aside";
import Modal from "../UI/Modal";
import LogOut from "./LogOut";
function Layout() {
  // Global Provider
  const token = localStorage.getItem("TokenUniNet");
  function setToken(value) {
    localStorage.setItem("TokenUniNet", value);
    window.location.reload();
  }
  const [searchParams, _setSearchParams] = useSearchParams();
  function setSearchParams(key, value) {
    const params = Object.fromEntries([...searchParams]);
    delete params[key];
    (Array.isArray(value) ? value.length : value)
      ? _setSearchParams(new URLSearchParams({ ...params, [key]: value }))
      : _setSearchParams(new URLSearchParams(params));
  }
  // Layout Variables
  const [trigger, setTrigger] = useState(false);
  return (
    <>
      <Aside setTrigger={setTrigger} />
      <Outlet
        context={{
          token,
          setToken,
          setSearchParams,
        }}
      />
      <Modal trigger={trigger} setTrigger={setTrigger}>
        <LogOut setToken={setToken} setTrigger={setTrigger} />
      </Modal>
    </>
  );
}
export default Layout;
