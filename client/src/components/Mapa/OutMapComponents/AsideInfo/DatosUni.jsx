import PropTypes from "prop-types";
import {
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaHandHoldingUsd,
  FaEnvelope,
} from "react-icons/fa";
import NoRefererLink from "./UI/NoRefererLink";
import Icon_Text from "./UI/Icon_Text";

function DatosUni({ universidad, iconColor }) {
  const {
    maps_universidad,
    direccion_universidad,
    localidad_universidad,
    zona_universidad,
    web_universidad,
    gestion_universidad,
    correo_universidad,
  } = universidad;
  return (
    <section className="grid gap-2">
      <NoRefererLink
        href={maps_universidad}
        Icon={FaMapMarkerAlt}
        text={`${direccion_universidad}, ${localidad_universidad}, ${zona_universidad}`}
        iconColor={iconColor}
      /><br/>
      <NoRefererLink
        href={web_universidad}
        Icon={FaGlobeAmericas}
        text={web_universidad}
        iconColor={iconColor}
      /><br/>
      <Icon_Text
        Icon={FaHandHoldingUsd}
        text={`Gestión: ${gestion_universidad}`}
        iconColor={iconColor}
      /><br/>
      <Icon_Text
        Icon={FaEnvelope}
        text={correo_universidad}
        iconColor={iconColor}
      />
    </section>
  );
}
DatosUni.propTypes = {
  universidad: PropTypes.exact({
    nombre_universidad: PropTypes.string,
    maps_universidad: PropTypes.string,
    direccion_universidad: PropTypes.string,
    localidad_universidad: PropTypes.string,
    zona_universidad: PropTypes.string,
    web_universidad: PropTypes.string,
    gestion_universidad: PropTypes.string,
    correo_universidad: PropTypes.string,
    Point: PropTypes.exact({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  }),
  iconColor: PropTypes.string,
};
export default DatosUni;
