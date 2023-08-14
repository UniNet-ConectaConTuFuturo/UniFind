import { updateUser } from "../database/consults.js";

function handleFormSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById('first_name').value;
  const lastName = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone_number').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  const zip = document.getElementById('zip').value;

  const updateObj = {
    name_user: firstName,
    last_name: lastName,
    email,
    tel_user: phoneNumber,
    direction_user: address,
    city,
    country,
    zip,
  };

  updateUser('usuarios', updateObj, email)
    .then(() => {
      alert('Actualización exitosa!');
    })
    .catch((error) => {
      console.error('Error al actualizar:', error);
    });
}
