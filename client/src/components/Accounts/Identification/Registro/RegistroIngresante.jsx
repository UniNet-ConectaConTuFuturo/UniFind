import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EntrantForm from "./Ingresante/EntrantForm";
import EntrantCode from "./Ingresante/EntrantCode";
import PropTypes from "prop-types";
import { useRegistro } from "../../../../hooks/useRegistro";
import "./registro.css";

function Registro({ className }) {
  const navigate = useNavigate();
  const { step } = useRegistro();
  const [formVisible, setFormVisible] = useState(true);
  const [codeVisible, setCodeVisible] = useState(false);
  const [classForm, setClassForm] = useState("");
  const [classCode, setClassCode] = useState("translate-x-1/2 opacity-0");

  useEffect(() => {
    if (step === 1) {
      setClassCode("translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setCodeVisible(false);
        setFormVisible(true);
        setTimeout(() => setClassForm(""), "100");
      }, "700");
    } else if (step === 2) {
      setClassForm("-translate-x-1/2 opacity-0 ");
      setTimeout(() => {
        setFormVisible(false);
        setCodeVisible(true);
        setTimeout(() => setClassCode(""), "100");
      }, "700");
    } else if (step === 3) {
      navigate("/");
    }
  }, [step, navigate]);
  return (
    <>
      <section
        className={
          className + " " + "caja relative flex justify-end pr-4 items-center"
        }
      >
        <div className="h-screen w-screen absolute bg-no-repeat opacity-50 translate-x-96 bg-[url('/images/graduation.png')]"></div>
        <div className="h-screen w-screen absolute bg-no-repeat translate-x-2/3 translate-y-28 bg-shape scale-125"></div>
        {formVisible && (
          <EntrantForm
            className={
              classForm + " " + "transition-all duration-700 translate-x-1/4"
            }
          />
        )}
        {codeVisible && (
          <EntrantCode
            className={
              classCode + " " + "transition-all duration-700 translate-x-2/4"
            }
          />
        )}
      </section>
    </>
  );
}
Registro.propTypes = {
  className: PropTypes.string,
};
export default Registro;
