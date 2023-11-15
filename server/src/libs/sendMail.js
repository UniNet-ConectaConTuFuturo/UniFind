import emailjs from "@emailjs/nodejs";
export default async function (params, templateID) {
  const serviceID = "service_y9h2zr8";
  const publicID = "bjwh7bDmJh42c7qUc";
  const privateID = "7qVfqsWk9Qulp17Kk0BZz";
  emailjs.init({
    publicKey: publicID,
    privateKey: privateID, // optional, highly recommended for security reasons
  });
  //Fin API EmailJS
  await emailjs.send(serviceID, templateID, params, publicID);
  return true;
}
