//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EntrantForm from "./EntrantForm";
import EntrantCode from "./EntrantCode";

function Registro() {
  //const navigate = useNavigate();
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

  const [formVisible, setFormVisible] = useState(true);
  const [codeVisible, setCodeVisible] = useState(false);
  const [step, setStep] = useState(0);
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
    }
  }, [step]);
  return (
    <section className="flex justify-end pr-4 items-center ">
      {formVisible && (
        <div className={classForm + " transition duration-700"}>
          <EntrantForm
            handleChange={handleChange}
            form={form}
            setStep={setStep}
          />
        </div>
      )}
      {codeVisible && (
        <div className={classCode + " transition duration-700"}>
          <EntrantCode form={form} setStep={setStep} />
        </div>
      )}
    </section>
  );
}

export default Registro;
