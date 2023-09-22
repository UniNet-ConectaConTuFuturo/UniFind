import { useState } from "react";
import PropTypes from "prop-types";
import { post } from "../../../../../api/api";
import "../../form.css";
import { useRegistro } from "../../../../../hooks/useRegistro";
import { useIdentification } from "../../../../../hooks/useIdentification";
import AsyncSelect from "react-select/async";

function RectorForm({ className }) {
  const { handleChange, form, setStep } = useRegistro();
  const spanVacio = {
    spanEmail: "",
    spanName: "",
    spanPassword: "",
    spanPassword2: "",
    spanDate: "",
    spanDirection: "",
    spanTel: "",
    spanUniversity: "",
  };
  const [span, setSpan] = useState(spanVacio);

  const handleBlur = async () => {
    try {
      const data = await post("/validate-registro-rector", form);
      setSpan({ ...spanVacio, ...data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await post("/rector/first-step", form);
      if (data.success) {
        console.log("Etapa 2");
        setStep(2);
      } else {
        setSpan({ ...spanVacio, ...data });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { handleCheckboxChange } = useIdentification();
  const [isLoading, setIsLoading] = useState(false);
  const asyncLoadOptions = async (inputValue) => {
    try {
      setIsLoading(true);
      const res = await post("/filter/uni", {
        inputValue,
      });
      setIsLoading(false);
      return res;
    } catch (error) {
      console.error(error);
    }
  };
  const [labelSelectClass, setLabelSelectClass] = useState("");
  return (
    <div className={className + " " + "box"} role="Form">
      <div></div>
      <form onSubmit={handleSubmit}>
        <div className="ml-48">
          <h2>Registrarse</h2>
        </div>
        <div className="inputbox ml-40">
          <input
            className="typebox"
            type="text"
            name="mail_user"
            id="mail_user"
            placeholder=" "
            value={form.mail_user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{span.spanEmail}</span>
          <label htmlFor="mail_user">Correo</label>
        </div>
        <div className="inputbox ml-32">
          <input
            className="typebox"
            type="text"
            name="name_user"
            id="name_user"
            placeholder=" "
            value={form.name_user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{span.spanName}</span>
          <label htmlFor="name_user">Nombre</label>
        </div>
        <div className="inputbox ml-24">
          <input
            className="typebox"
            type="password"
            name="password_user"
            id="password_user"
            placeholder=" "
            value={form.password_user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{span.spanPassword}</span>
          <label htmlFor="password_user">Contraseña</label>
        </div>
        <div className="inputbox ml-16">
          <input
            className="typebox"
            type="password"
            name="password2_user"
            id="password2_user"
            placeholder=" "
            value={form.password2_user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{span.spanPassword2}</span>
          <label htmlFor="password2_user">Repetir Contraseña</label>
        </div>
        <div className="inputbox ml-8">
          <input
            className="typebox"
            type="date"
            name="date_user"
            id="date_user"
            placeholder=" "
            value={form.date_user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{span.spanDate}</span>
          <label htmlFor="date_user">Fecha de Nacimiento</label>
        </div>
        <div className="inputbox ml-0">
          <input
            className="typebox"
            type="text"
            name="direction_user"
            id="direction_user"
            placeholder=" "
            value={form.direction_user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{span.spanDirection}</span>
          <label htmlFor="direction_user">Dirección</label>
        </div>
        <div className="inputbox -ml-8">
          <input
            className="typebox"
            type="tel"
            name="tel_user"
            id="tel_user"
            placeholder=" "
            value={form.tel_user}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span>{span.spanTel}</span>
          <label htmlFor="tel_user">Teléfono</label>
        </div>
        <div className="inputbox -ml-16">
          <AsyncSelect
            className=""
            classNamePrefix="border-0 bg-transparent text-white "
            name="id_universidad"
            inputId="id_universidad"
            placeholder=""
            cacheOptions
            defaultOptions
            onChange={(option) => {
              const target = {
                name: "id_universidad",
                value: option ? option.value : "",
              };
              handleChange({ target });
              handleBlur({ target });
            }}
            onFocus={() => setLabelSelectClass("force-input-focus")}
            onBlur={() => {
              if (form.id_universidad === "") setLabelSelectClass("");
            }}
            loadOptions={asyncLoadOptions}
            isLoading={isLoading}
          />
          <span className={labelSelectClass}>{span.spanUniversity}</span>
          <label htmlFor="id_universidad" className={labelSelectClass}>
            Universidad
          </label>
        </div>

        <input
          className="boton hover:bg-white -ml-24"
          type="submit"
          name="boton"
          id="boton"
        />
        <br />
        <p className="-ml-20 max-w-xs">
          <a
            href="#"
            onClick={() => handleCheckboxChange(false)}
          >
            Ya tengo una cuenta
          </a>
        </p>
        <br />
        <Link
            to="/identificacion/rector"
          >
            Soy ingresante
          </Link>
      </form>
    </div>
  );
}
RectorForm.propTypes = {
  className: PropTypes.string,
};
export default RectorForm;
