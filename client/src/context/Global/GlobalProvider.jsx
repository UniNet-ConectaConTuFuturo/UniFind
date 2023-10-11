import { useSearchParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

function GlobalProvider() {
  const [token, setToken_] = useState(localStorage.getItem("TokenUniNet"));
  function setToken(value) {
    localStorage.setItem("TokenUniNet", value);
    setToken_(value);
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
  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
        setSearchParams,
      }}
    >
      <Layout />
    </GlobalContext.Provider>
  );
}
export default GlobalProvider;
