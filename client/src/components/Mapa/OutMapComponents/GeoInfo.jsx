import { useMapa } from "../../../hooks/useMapa";
function GeoInfo() {
  const { provInfo, depInfo, idUniToShowInfo } = useMapa();
  return (
    <section
      role="Geolocation Info"
      className={
        "leaflet-top right-4 w-40 text-center" +
        (idUniToShowInfo === 0 ? "" : "hidden")
      }
    >
      <div
        className="leaflet-control-layers  leaflet-control leaflet-control-layers-expanded w-full"
        aria-haspopup="true"
      >
        <div className="leaflet-control-layers-list">
          <p ref={provInfo}></p>
          <p ref={depInfo}></p>
        </div>
      </div>
    </section>
  );
}

export default GeoInfo;
