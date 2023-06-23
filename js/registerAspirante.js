import getHTML from "./insertHtml.js";
const serviceID = "default_service";
const templateID = "template_al6t6fo";
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
} // tanto el valor mínimo como el máximo están incluidos en el resultado.
let code,
  intentos = 0;
const d = document,
  $main = d.querySelector("main"),
  data = {
    correo: "",
    nombre: "",
    contrasena: "",
    nacimiento: "",
    direccion: "",
    telefono: "",
    titulo: "",
  };
d.addEventListener("DOMContentLoaded", (e) => {
  getHTML({
    url: "/pages/forms/aspirante-form.html",
    success: (html) => ($main.innerHTML = html),
    error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
  });
});
//Validaciones
let regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  regexName = /[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
  regexPassword = /^.{4,255}$/;
d.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.matches("#form-primary")) {
    //Formulario 1
    const $submit = d.querySelector(`input[type=submit]`);
    $submit.disabled = true;

    d.querySelectorAll("form > div").forEach(($div) => {
      $div.children[1].textContent = "";
    });

    const $inputEmail = d.querySelector(`input[name="correo"]`),
      $inputName = d.querySelector(`input[name="nombre"]`),
      $inputPassword = d.querySelector(`input[name="contrasena"]`),
      $inputPassword2 = d.querySelector(`input[name="contrasena2"]`),
      $inputNac = d.querySelector(`input[name="nacimiento"]`),
      $inputDir = d.querySelector(`input[name="direccion"]`),
      $inputTel = d.querySelector(`input[name="telefono"]`),
      $inputTitle = d.querySelector(`input[name="titulo secundario"]`);

    /* //Email Validation
    if (!$inputEmail.value.trim())
      $inputEmail.nextElementSibling.textContent = "Falta completar";
    else if (!regexEmail.test($inputEmail.value.trim()))
      $inputEmail.nextElementSibling.textContent = "Formato invalido";
    //Name Validation
    else if (!$inputName.value.trim())
      $inputName.nextElementSibling.textContent = "Falta completar";
    else if (!regexName.test($inputName.value.trim()))
      $inputName.nextElementSibling.textContent =
        "Sólo se aceptan letras y espacios";
    //Password1 Validation
    else if (!$inputPassword.value)
      $inputPassword.nextElementSibling.textContent = "Falta completar";
    else if (!regexPassword.test($inputPassword.value))
      $inputPassword.nextElementSibling.textContent =
        "Debe contener más de 4 caracteres";
    //Password2 Validation
    else if (!$inputPassword2.value)
      $inputPassword2.nextElementSibling.textContent = "Falta Completar";
    else if ($inputPassword.value !== $inputPassword2.value)
      $inputPassword2.nextElementSibling.textContent =
        "Las contraseñas no coinciden";
    //Nac Validation
    else if (!$inputNac.value)
      $inputNac.nextElementSibling.textContent = "Falta Completar";
    //Direccion Validation
    else if (!$inputDir.value.trim())
      $inputDir.nextElementSibling.textContent = "Falta Completar";
    //Telefono Validation
    else if (!$inputTel.value.trim())
      $inputTel.nextElementSibling.textContent = "Falta Completar";
    //Title Validation
    else if (!$inputTitle.value.trim())
      $inputTitle.nextElementSibling.textContent = "Falta Completar";
    //Las validaciones son correctas
    else */
    //
    {
      $submit.value = "Enviando...";
      //Codigo aleatorio
      code = getRandomIntInclusive(100000, 999999);
      //Envio a mail
      emailjs
        .send(serviceID, templateID, {
          code,
          name: $inputName.value,
          email: $inputEmail.value,
        })
        .then(
          () => {
            $submit.value = "Enviado";
            console.log("Sent!");
            data.correo = $inputEmail.value.trim();
            data.nombre = $inputName.value.trim();
            data.contrasena = $inputPassword.value;
            data.nacimiento = $inputNac.value;
            data.direccion = $inputDir.value.trim();
            data.telefono = $inputTel.value.trim();
            data.titulo = $inputTitle.value.trim();
            getHTML({
              url: "/pages/forms/aspirante-code.html",
              success: (html) => ($main.innerHTML = html),
              error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
            });
          },
          (err) => {
            $inputEmail.nextElementSibling.textContent = "El email no existe";
            $submit.value = "Enviar";
            console.log(JSON.stringify(err));
          }
        );
      /* fetch("https://formsubmit.co/ajax/uninet23@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: "UniNet",
          message: `${(d.createElement("h1").textContent = code)}`,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          window.open("/pages/ingresarcodigo.html", "_self");
        })
        .catch((error) => console.log(error)); */
    }
    $submit.disabled = false;
  }
  if (e.target.matches("#form-secondary")) {
    const $code = d.querySelector(`input[name=code]`),
      $submit = d.querySelector(`input[type=submit]`);
    console.log(parseInt($code.value), code);
    if (parseInt($code.value) !== code) {
      intentos++;
      alert("Código erróneo");
      $code.value = "";
      if (intentos >= 3) {
        $code.disabled = true;
        $submit.disabled = true;
      }
    } else {
      alert("El codigo esta correcto");
      //El codigo esta correcto
      //toda la info del formulario anterior esta en el objeto
      //data
    }
  }
});
d.addEventListener("click", (e) => {
  if (e.target.matches("#volver")) {
    getHTML({
      url: "/pages/forms/aspirante-form.html",
      success: (html) => {
        $main.innerHTML = html;
        const $inputEmail = d.querySelector(`input[name="correo"]`),
          $inputName = d.querySelector(`input[name="nombre"]`),
          $inputPassword = d.querySelector(`input[name="contrasena"]`),
          $inputPassword2 = d.querySelector(`input[name="contrasena2"]`),
          $inputNac = d.querySelector(`input[name="nacimiento"]`),
          $inputDir = d.querySelector(`input[name="direccion"]`),
          $inputTel = d.querySelector(`input[name="telefono"]`),
          $inputTitle = d.querySelector(`input[name="titulo secundario"]`);
        $inputEmail.value = data.correo;
        $inputName.value = data.nombre;
        $inputPassword.value = data.contrasena;
        $inputPassword2.value = data.contrasena;
        $inputNac.value = data.nacimiento;
        $inputDir.value = data.direccion;
        $inputTel.value = data.telefono;
        $inputTitle.value = data.titulo;
      },
      error: (err) => ($main.innerHTML = `<h1>${err}</h1>`),
    });
  }
  if (e.target.matches("#repeat")) {
    e.preventDefault();
    const $code = d.querySelector(`input[name=code]`),
      $submit = d.querySelector(`input[type=submit]`);
    //Codigo aleatorio
    code = getRandomIntInclusive(100000, 999999);
    //Envio a mail
    emailjs
      .send(serviceID, templateID, {
        code,
        name: data.nombre,
        email: data.correo,
      })
      .then(
        () => {
          alert("Enviado");
          intentos = 0;
          $code.disabled = false;
          $submit.disabled = false;
        },
        (err) => {
          $submit.value = "Enviar";
          console.log(JSON.stringify(err));
        }
      );
  }
});
