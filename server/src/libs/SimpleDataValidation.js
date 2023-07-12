export function simpleDataValidation({
  mail_user,
  name_user,
  password_user,
  password2_user,
  date_user,
  direction_user,
  tel_user,
}) {
  try {
    //Validaciones
    let regexName = /[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
      regexPassword = /^.{4,255}$/;
    //Email Validation
    const wrongmail = mailValidation({ mail_user });
    if (wrongmail) return wrongmail;
    //Name Validation
    else if (!name_user.trim()) return { spanName: "Completar" };
    else if (!regexName.test(name_user.trim()))
      return { spanName: "Sólo se aceptan letras y espacios" };
    //Password1 Validation
    else if (!password_user) return { spanPassword: "Completar" };
    else if (!regexPassword.test(password_user))
      return { spanPassword: "Debe contener más de 4 caracteres" };
    //Password2 Validation
    else if (!password2_user) return { spanPassword2: "Completar" };
    else if (password_user !== password2_user)
      return { spanPassword2: "Las contraseñas no coinciden" };
    //Nac Validation
    else if (!date_user) return { spanDate: "Completar" };
    //Direccion Validation
    else if (!direction_user.trim()) return { spanDirection: "Completar" };
    //Telefono Validation
    else if (!tel_user.trim()) return { spanTel: "Completar" };
    else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}
export function mailValidation({ mail_user }) {
  let regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (!mail_user.trim()) return { spanEmail: "Completar" };
  else if (!regexEmail.test(mail_user.trim()))
    return { spanEmail: "Formato invalido" };
  else return false;
}
