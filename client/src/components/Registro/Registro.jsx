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

  const [step, setStep] = useState(1);
  const [classForm, setClassForm] = useState("");
  const [classCode, setClassCode] = useState(
    "translate-x-1/2 opacity-0 invisible"
  );

  useEffect(
    (classCode) => {
      if (step === 1) {
        setTimeout(() => {
          setClassForm("");
        }, "1100");
        if (classCode === "invisible") return;
        setClassCode("translate-x-1/2 opacity-0 ");
        setTimeout(() => {
          setClassCode("translate-x-1/2 opacity-0 invisible");
        }, "1050");
      } else if (step === 2) {
        setTimeout(() => {
          setClassCode("");
        }, "1100");
        setClassForm("-translate-x-1/2 opacity-0 ");
        setTimeout(() => {
          setClassForm("-translate-x-1/2 opacity-0 invisible");
        }, "1050");
      }
    },
    [step]
  );
  return (
    <section className="h-screen flex justify-end pr-4 items-center ">
      <div className={classForm + " transition duration-1000 absolute"}>
        <EntrantForm
          handleChange={handleChange}
          form={form}
          setStep={setStep}
        />
      </div>
      <div className={classCode + " transition duration-1000 absolute"}>
        <EntrantCode form={form} setStep={setStep} />
      </div>
    </section>
  );
}

export default Registro;
