import PropTypes from "prop-types";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { myIconPrototype, mySelectedIconPrototype } from "./MyIcon";
import { useMapa } from "../../../hooks/useMapa";
import { lazy } from "react";
const PopUp = lazy(() => import("./PopUps/PopUp"));

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
