import PropTypes from "prop-types";
import { Marker, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { myIconPrototype, mySelectedIconPrototype } from "./MyIcon";
import { useMapa } from "../../../../hooks/useMapa";
import { lazy, useCallback } from "react";
const PopUp = lazy(() => import("../PopUps/PopUp"));

function MyMarker({ u }) {
  const { idUniToShowInfo, setIdUniToShowInfo } = useMapa();
  const map = useMap();
  const handleVerMas = useCallback(() => {
    map.closePopup();
    setIdUniToShowInfo(u.id_universidad);
  }, [map, setIdUniToShowInfo, u.id_universidad]);
  return (
    <Marker
      icon={
        new Icon(
          idUniToShowInfo === u.id_universidad
            ? mySelectedIconPrototype
            : myIconPrototype
        )
      }
      position={[u.Point.x, u.Point.y]}
    >
      <PopUp id_universidad={u.id_universidad} handleVerMas={handleVerMas} />
    </Marker>
  );
}
MyMarker.propTypes = {
  u: PropTypes.any,
};
export default MyMarker;
