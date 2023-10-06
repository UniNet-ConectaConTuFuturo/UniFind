import { Router } from "express";

//Import Controllers
import * as controllers from "../controllers/accounts/configAccount.js";

const router = Router();

router.post("/api/config-account", controllers.handleFormSubmit);

export default router;
