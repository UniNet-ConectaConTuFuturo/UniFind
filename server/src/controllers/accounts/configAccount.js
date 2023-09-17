import { updateUser } from "../../database/consults/usuariosC.js";

async function handleFormSubmit(req, res) {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      country,
      zip,
      token,
    } = req.body;

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const data = {};
      if (firstName.trim()) data.name_user = firstName;
      if (lastName.trim()) data.name_user = lastName;
      if (email.trim()) data.email = email;
      if (phoneNumber.trim()) data.phoneNumber = phoneNumber;
      if (address.trim()) data.address = address;
      if (city.trim()) data.city = city;
      if (country.trim()) data.country = country;
      if (zip.trim()) data.zip = zip;

      const { id } = decoded;

      await updateUser(data, id);

      console.log("Actualización exitosa!");
      return res.status(200).json({ success: true }).end();
    });
  } catch (error) {
    console.error(error);
    res.status(404).end();
  }
}
