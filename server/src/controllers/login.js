import * as consult from "../database/consults.js";

export async function SignIn(req, res) {
  const data = req.body;
  userData = await consult.selectFromUsuarios("*",data.mail_user);
  if(userData.password_user === data.password_user){
    req.session.user = userData;
    
  }
}