import PropTypes from "prop-types";
import { Marker, Tooltip, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { myIconPrototype, mySelectedIconPrototype } from "./myIcon";
import { useMapa } from "../../../../hooks/useMapa";
import { useRef } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
function MyMarker({ u }) {
  const [searchParams] = useSearchParams();
  const { setSearchParams } = useOutletContext();
  const { markerSize } = useMapa();
  const map = useMap();
  const tooltipRef = useRef();
  function handleClick() {
    map.closeTooltip(tooltipRef.current);
    searchParams.get("selected") == u.id_universidad
      ? setSearchParams("selected")
      : setSearchParams("selected", u.id_universidad);
  }
  return (
    <Marker
      icon={
        new Icon(
          searchParams.get("selected") == u.id_universidad
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
