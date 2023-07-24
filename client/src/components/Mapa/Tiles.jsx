import { LayerGroup, Pane, TileLayer } from "react-leaflet";

function Tiles() {
  return (
    <LayerGroup>
      <Pane name="labels" zIndex={250}>
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png" />
      </Pane>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png" />
    </LayerGroup>
  );
}

export default Tiles;
