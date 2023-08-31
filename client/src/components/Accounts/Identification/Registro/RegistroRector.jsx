import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RectorForm from "./Rector/RectorForm";
import RectorCode from "./Rector/RectorCode";
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
  }, [step]);
  return (
    <>
      <section
        role="Registro"
        className={
          className + " " + "caja relative flex justify-end pr-4 items-center"
        }
      >
        <div className="h-screen w-screen absolute bg-no-repeat opacity-50 bg-[url('/images/graduation.png')]"></div>
        {formVisible && (
          <RectorForm
            className={classForm + " " + "transition-all duration-700"}
          />
        )}
        {codeVisible && (
          <RectorCode
            className={classCode + " " + "transition-all duration-700"}
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
