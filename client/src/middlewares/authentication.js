import { redirect } from "react-router-dom";
import userOptions from "../modelos/userOptions";
import getAuth from "./getAuth";

const template = async (userOption) =>
  (await getAuth()) !== userOption ? redirect("/home") : null;

const authenticated = () => template(!userOptions.noAuthenticated);

const notAuthenticated = () => template(userOptions.noAuthenticated);

const entrant = () => template(userOptions.entrant);

const rector = () => template(userOptions.rector);

export { authenticated, notAuthenticated, entrant, rector };
