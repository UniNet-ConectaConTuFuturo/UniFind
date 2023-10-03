import { useMapa } from "../../../hooks/useMapa";
import LeafletBox from "./UI/LeafletBox";
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
      <LeafletBox containerClassName="w-full" isExpanded={true}>
        <p ref={provInfo}></p>
        <p ref={depInfo}></p>
      </LeafletBox>
    </section>
  );
}

export default GeoInfo;
