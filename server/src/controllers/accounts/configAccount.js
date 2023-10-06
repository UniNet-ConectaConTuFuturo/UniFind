import { updateUser } from "../../database/consults/usuariosC.js";

export async function handleFormSubmit(req, res) {
  try {
    const {
      Name,
      phoneNumber,
      address,
    } = req.body;

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) throw err;
      const data = {};
      if (Name.trim()) data.name_user = Name;
      if (phoneNumber.trim()) data.phoneNumber = phoneNumber;
      if (address.trim()) data.address = address;

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
