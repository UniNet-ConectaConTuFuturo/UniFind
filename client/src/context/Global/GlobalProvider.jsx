import Layout from "../../components/Layout/Layout";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";

function GlobalProvider() {
  const [token, setToken_] = useState(localStorage.getItem("TokenUniNet"));
  function setToken(value) {
    localStorage.setItem("TokenUniNet", value);
    setToken_(value);
  }
  return (
    <GlobalContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      <Layout />
    </GlobalContext.Provider>
  );
}
export default GlobalProvider;
