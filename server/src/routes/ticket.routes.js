import { Router } from "express";

//Import Controllers
import * as ticket from "../controllers/ticket.js";

const router = Router();

//enviar ticket ingresante
router.post('/api/enviarticket', ticket.sendTicket);

//Ver estado ticket
router.post('/api/estadoticket', ticket.estadoTicket);
router.post('/api/estadoticketrector', ticket.getTicketV2);

export default router;