import PropTypes from "prop-types";
import DataForm from "./DataForm";
import CodeForm from "./CodeForm";
import { forwardRef, useRef, useState } from "react";

const Registro = forwardRef(function Registro(
  { changeToLogin, changeRegistro, otroRegistroText, isEntrant },
  ref
) {
  const dataFormRef = useRef(null);
  const codeFormRef = useRef(null);
  const formNuevo = {
    mail_user: "",
    name_user: "",
    password_user: "",
    password2_user: "",
    date_user: "",
    direction_user: "",
    tel_user: "",
    [isEntrant ? "title" : "id_universidad"]: isEntrant ? "" : 0,
  };
  const [form, setForm] = useState(formNuevo);
  function next(boolean) {
    console.log(boolean);
  }
  return (
    <section
      role="Registro"
      ref={ref}
      className="center transition-position-y-transform duration-700 nearby-right"
    >
      <DataForm
        ref={dataFormRef}
        form={form}
        setForm={setForm}
        isEntrant={isEntrant}
        next={next}
        changeToLogin={changeToLogin}
        changeRegistro={changeRegistro}
        otroRegistroText={otroRegistroText}
      />
      <CodeForm
        ref={codeFormRef}
        form={form}
        isEntrant={isEntrant}
        next={next}
      />
    </section>
  );
});
Registro.propTypes = {
  changeToLogin: PropTypes.func,
  changeRegistro: PropTypes.func,
  otroRegistroText: PropTypes.string,
  isEntrant: PropTypes.bool,
};
export default Registro;
