import { RegistroContext } from "./RegistroContext";
import { useState } from "react";
import PropTypes from "prop-types";

function RegistroProvider({ children }) {
  const formNuevo = {
    mail_user: "",
    name_user: "",
    password_user: "",
    password2_user: "",
    date_user: "",
    direction_user: "",
    tel_user: "",
    title: "",
    code: "",
  };
  const [form, setForm] = useState(formNuevo);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const [step, setStep] = useState(0);
  return (
    <RegistroContext.Provider
      value={{
        form,
        setForm,
        handleChange,
        step,
        setStep,
      }}
    >
      {children}
    </RegistroContext.Provider>
  );
}
RegistroProvider.propTypes = {
  children: PropTypes.any,
};
export default RegistroProvider;
