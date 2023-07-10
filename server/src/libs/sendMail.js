import emailjs from "@emailjs/nodejs";
export default async function (params) {
  const serviceID = "service_9kwudo7";
  const templateID = "template_al6t6fo";
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
