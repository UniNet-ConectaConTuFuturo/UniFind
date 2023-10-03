const iconSize = [25, 41],
  shadowAnchorDisplacementX = -10,
  shadowSize = [iconSize[0] * 2, iconSize[1] * 2],
  iconAnchor = [iconSize[0] / 2, iconSize[1]],
  shadowAnchor = [shadowSize[0] / 2 + shadowAnchorDisplacementX, shadowSize[1]],
  popupAnchor = [0, -iconSize[1]],
  tooltipAnchorDisplacementY = 0,
  tooltipAnchor = [0, 1.5 * -iconSize[1] + tooltipAnchorDisplacementY];

const escalar = 1.25;
const selectedIconSize = iconSize.map((n) => n * escalar),
  selectedShadowAnchorDisplacementX = shadowAnchorDisplacementX * escalar,
  selectedShadowSize = [selectedIconSize[0] * 2, selectedIconSize[1] * 2],
  selectedIconAnchor = [selectedIconSize[0] / 2, selectedIconSize[1]],
  selectedShadowAnchor = [
    selectedShadowSize[0] / 2 + selectedShadowAnchorDisplacementX,
    selectedShadowSize[1],
  ],
  selectedPopupAnchor = [0, -selectedIconSize[1]],
  selectedTooltipAnchorDisplacementY = tooltipAnchorDisplacementY * escalar,
  selectedTooltipAnchor = [
    0,
    1.5 * -selectedIconSize[1] + selectedTooltipAnchorDisplacementY,
  ];

const myIconPrototype = {
  iconUrl: "http://localhost:8080/images/marker-icon.png",
  shadowUrl: "http://localhost:8080/images/marker-shadow.png",

  iconSize, // size of the icon
  shadowSize, // size of the shadow
  iconAnchor, // point of the icon which will correspond to marker's location
  shadowAnchor, // the same for the shadow
  popupAnchor, // point from which the popup should open relative to the iconAnchor
  tooltipAnchor,
};
const mySelectedIconPrototype = {
  iconUrl: "http://localhost:8080/images/marker-icon-2x-selected.png",
  shadowUrl: "http://localhost:8080/images/marker-shadow.png",

  iconSize: selectedIconSize, // size of the icon
  shadowSize: selectedShadowSize, // size of the shadow
  iconAnchor: selectedIconAnchor, // point of the icon which will correspond to marker's location
  shadowAnchor: selectedShadowAnchor, // the same for the shadow
  popupAnchor: selectedPopupAnchor, // point from which the popup should open relative to the iconAnchor
  tooltipAnchor: selectedTooltipAnchor,
};

export { myIconPrototype, mySelectedIconPrototype };
