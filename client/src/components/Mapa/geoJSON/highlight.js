import borderView from "./outOfView";

let currentLayer,
  lastStyle,
  interactive = true;
export function lookFeature(map) {
  if (borderView(currentLayer, map)) {
    interactive = true;
  } else {
    interactive = false;
    currentLayer.setStyle(lastStyle);
  }
}
function highlightFeature(e) {
  currentLayer = e.target;
  currentLayer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });
  currentLayer.bringToFront();
}
function resetHighlight(e, className) {
  e.target.setStyle(className);
}
function zoomToFeature(e, map) {
  map.fitBounds(e.target.getBounds());
}
export default function onEachFeature(feature, layer, className, map) {
  lastStyle = className;
  layer.on({
    mouseover: (e) => {
      currentLayer = layer;
      lookFeature(map);
      if (interactive) highlightFeature(e);
    },
    mouseout: (e) => {
      if (interactive) resetHighlight(e, className);
    },
    click: (e) => {
      if (interactive) zoomToFeature(e, map);
    },
  });
}
