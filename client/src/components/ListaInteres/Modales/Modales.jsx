import { useLista } from "../../../hooks/useContexts";
import CarrerasUni from "../../Mapa/OutMapComponents/AsideInfo/CarrerasUni";
//import Modal from "../../UI/Modal";
import Carta from "./Carta/Carta";
import { Modal } from "antd";
function Modales() {
  const {
    idUniToShowInfo,
    popUpVerMas,
    setPopUpVerMas,
    popUpCarta,
    setPopUpCarta,
  } = useLista();
  return (
    <>
      <Modal
        open={popUpVerMas}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        onCancel={() => setPopUpVerMas(false)}
        centered
      >
        <div className="max-h-[75vh] overflow-y-scroll">
          <CarrerasUni id_universidad={idUniToShowInfo} />
        </div>
      </Modal>

      <Modal
        open={popUpCarta}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        onCancel={() => setPopUpCarta(false)}
        centered
      >
        <Carta id_universidad={idUniToShowInfo} />
      </Modal>
    </>
  );
}

export default Modales;
