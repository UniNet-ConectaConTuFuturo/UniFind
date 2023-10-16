import PropTypes from "prop-types";
import { Marker, Tooltip, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { myIconPrototype, mySelectedIconPrototype } from "./myIcon";
import { useMapa } from "../../../../hooks/useMapa";
import { useRef } from "react";

function MyMarker({ u }) {
  const { idUniToShowInfo, setIdUniToShowInfo, markerSize } = useMapa();
  const map = useMap();
  const tooltipRef = useRef();
  function handleClick() {
    map.closeTooltip(tooltipRef.current);
    idUniToShowInfo === u.id_universidad
      ? setIdUniToShowInfo(0)
      : setIdUniToShowInfo(u.id_universidad);
  }
  return (
    <Marker
      icon={
        new Icon(
          idUniToShowInfo === u.id_universidad
            ? mySelectedIconPrototype(markerSize)
            : myIconPrototype(markerSize)
        )
      }
      position={[u.Point.x, u.Point.y]}
      eventHandlers={{ click: handleClick }}
    >
      <Tooltip ref={tooltipRef} direction="center">
        {u.nombre_universidad}
      </Tooltip>
    </Marker>
  );
}
MyMarker.propTypes = {
  u: PropTypes.any,
};
export default MyMarker;
