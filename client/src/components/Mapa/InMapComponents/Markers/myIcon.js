const myIconPrototype = (escala) => {
  const iconSize = [25 * escala, 41 * escala],
    shadowAnchorDisplacementX = -10 * escala,
    shadowSize = [iconSize[0] * 2, iconSize[1] * 2],
    iconAnchor = [iconSize[0] / 2, iconSize[1]],
    shadowAnchor = [
      shadowSize[0] / 2 + shadowAnchorDisplacementX,
      shadowSize[1],
    ],
    popupAnchor = [0, -iconSize[1]],
    tooltipAnchorDisplacementY = 0 * escala,
    tooltipAnchor = [0, 1.5 * -iconSize[1] + tooltipAnchorDisplacementY];
  return {
    iconUrl: "http://localhost:8080/images/marker-icon.png",
    shadowUrl: "http://localhost:8080/images/marker-shadow.png",

    iconSize, // size of the icon
    shadowSize, // size of the shadow
    iconAnchor, // point of the icon which will correspond to marker's location
    shadowAnchor, // the same for the shadow
    popupAnchor, // point from which the popup should open relative to the iconAnchor
    tooltipAnchor,
  };
};
const mySelectedIconPrototype = (escala) => {
  const escalar = 1.25 * escala;
  const selectedIconSize = [25 * escalar, 41 * escalar],
    selectedShadowAnchorDisplacementX = -10 * escalar,
    selectedShadowSize = [selectedIconSize[0] * 2, selectedIconSize[1] * 2],
    selectedIconAnchor = [selectedIconSize[0] / 2, selectedIconSize[1]],
    selectedShadowAnchor = [
      selectedShadowSize[0] / 2 + selectedShadowAnchorDisplacementX,
      selectedShadowSize[1],
    ],
    selectedPopupAnchor = [0, -selectedIconSize[1]],
    selectedTooltipAnchorDisplacementY = 0 * escalar,
    selectedTooltipAnchor = [
      0,
      1.5 * -selectedIconSize[1] + selectedTooltipAnchorDisplacementY,
    ];

  return {
    iconUrl: "http://localhost:8080/images/marker-icon-2x-selected.png",
    shadowUrl: "http://localhost:8080/images/marker-shadow.png",

    iconSize: selectedIconSize, // size of the icon
    shadowSize: selectedShadowSize, // size of the shadow
    iconAnchor: selectedIconAnchor, // point of the icon which will correspond to marker's location
    shadowAnchor: selectedShadowAnchor, // the same for the shadow
    popupAnchor: selectedPopupAnchor, // point from which the popup should open relative to the iconAnchor
    tooltipAnchor: selectedTooltipAnchor,
  };
};
export { myIconPrototype, mySelectedIconPrototype };
