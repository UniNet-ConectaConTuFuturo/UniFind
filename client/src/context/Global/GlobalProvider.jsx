import { useSearchParams } from "react-router-dom";
import { GlobalContext } from "./GlobalContext";
import { useState } from "react";
import PropTypes from "prop-types";

function GlobalProvider({ children }) {
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
      {children}
    </GlobalContext.Provider>
  );
}
GlobalProvider.propTypes = {
  children: PropTypes.any,
};
export default GlobalProvider;
