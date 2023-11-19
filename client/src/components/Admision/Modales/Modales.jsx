import { useAdmision } from "../../../hooks/useContexts";
import Modal from "../../UI/Modal";
import Examen from "./Carta/Solicitud";

function Modales() {
  const { popUpExamen, setPopUpExamen } = useAdmision();
  return (
    <Modal trigger={popUpExamen} setTrigger={setPopUpExamen}>
      <Examen />
    </Modal>
  );
}

export default Modales;
