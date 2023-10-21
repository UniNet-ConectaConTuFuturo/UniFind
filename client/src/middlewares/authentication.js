import userOptions from "../modelos/userOptions";
import getAuth from "./getAuth";

const auth = async () => (await getAuth()) !== userOptions.noAuthenticated;

const notAuth = async () => (await getAuth()) === userOptions.noAuthenticated;

const entrant = async () => (await getAuth()) === userOptions.entrant;

const rector = async () => (await getAuth()) === userOptions.rector;

export { auth, notAuth, entrant, rector };
