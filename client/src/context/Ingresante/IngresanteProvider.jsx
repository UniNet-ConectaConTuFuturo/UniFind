import { Outlet } from "react-router-dom";
import { IngresanteContext } from "./IngresanteContext";
import { useRef, useState } from "react";

function IngresanteProvider() {
  const [bgColor, setBgColor] = useState("bg-sky-600");
  const [loginVisible, setLoginVisible] = useState(true);
  const [registroVisible, setRegistroVisible] = useState(false);
  const [classLogin, setClassLogin] = useState("");
  const [classRegistro, setClassRegistro] = useState(
    "translate-x-1/2 opacity-0"
  );
  const checkboxRef = useRef();
  const handleCheckboxChange = () => {
    if (checkboxRef.current.checked) {
      setBgColor("");
      setClassLogin("-translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setLoginVisible(false);
        setRegistroVisible(true);
        setTimeout(() => setClassRegistro(""), "100");
      }, "700");
    } else {
      setBgColor("bg-sky-700");
      setClassRegistro("translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setRegistroVisible(false);
        setLoginVisible(true);
        setTimeout(() => setClassLogin(""), "100");
      }, "700");
    }
  };
  return (
    <IngresanteContext.Provider
      value={{
        checkboxRef,
        handleCheckboxChange,
        bgColor,
        loginVisible,
        registroVisible,
        classLogin,
        classRegistro,
      }}
    >
      <Outlet />
    </IngresanteContext.Provider>
  );
}
export default IngresanteProvider;
