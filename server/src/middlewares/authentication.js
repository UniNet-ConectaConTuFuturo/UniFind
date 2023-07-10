import jwt from "jsonwebtoken";
import { jwtConfig } from "../config.js";
import * as consult from "../database/consults.js"
const authenticated = (req, res, next) => {
  try {
    //const token = req.headers["x-access-token"];
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    jwt.verify(token, jwtConfig.SECRET);
    /* 
    //Consultar por decodedToken.id en la Tabla de Ingresantes
    const user_data = await consult.select("user_id", decoded.id)
    console.log(user_data);
    */
    if (user_data) {
      next();
    } else {
      res.status(401).json("nope");
    }

    next();
  } catch {
    res.status(401).json({ logout: true });
  }
};

const onlyOwner = async (req, res, next) => {
  try {
    //const token = req.headers["x-access-token"];
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    const decodedToken = jwt.verify(token, jwtConfig.SECRET);
    if (decodedToken.id === parseInt(req.params.id)) {
      next();
    } else {
      res.status(401).json("nope");
    }
  } catch {
    res.status(401).json("Unauthorized");
  }
};

const isEntrant = async (req, res, next) => {
  try {
    //const token = req.headers["x-access-token"];
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    const decodedToken = jwt.verify(token, jwtConfig.SECRET);
     
    /* 
    //Consultar por decodedToken.id en la Tabla de Ingresantes
    const user_data = await consult.select("title", decoded.id)
    console.log(user_data);
    */
   let user_data = "test";//Borrar esta linea
    if (user_data.length) {
      next();
    } else {
      res.status(401).json("nope");
    }
  } catch {
    res.status(401).json("Unauthorized");
  }
};
const isRector = async (req, res, next) => {
  try {
    //const token = req.headers["x-access-token"];
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    const decodedToken = jwt.verify(token, jwtConfig.SECRET);
     
    /* 
    //Consultar por decodedToken.id en la Tabla de Rectores
    const user_data = await consult.select("verificado", decoded.id)
    console.log(user_data);
    */
   let user_data = 1;//Borrar esta linea
    if (user_data) {
      next();
    } else {
      res.status(401).json("nope");
    }
  } catch {
    res.status(401).json("Unauthorized");
  }
};