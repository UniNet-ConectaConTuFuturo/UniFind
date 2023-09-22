import { Marker } from "react-leaflet";
import PopUp from "./PopUps/PopUp";
import { myIconPrototype, mySelectedIconPrototype } from "./MyIcon";
import PropTypes from "prop-types";
import { Icon } from "leaflet";
import { useMapa } from "../../../hooks/useMapa";

function MyMarker({ u }) {
  const { idUniToShowInfo } = useMapa();
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
      <PopUp id_universidad={u.id_universidad} />
    </Marker>
  );
}
MyMarker.propTypes = {
  u: PropTypes.any,
};
export default MyMarker;
