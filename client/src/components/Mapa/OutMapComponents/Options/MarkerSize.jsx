import { Segmented } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import "./markersize.css";
function MarkerSize() {
  return (
    <Segmented
      size="small"
      options={[
        {
          icon: <BiHide key={2} size={16} />,
          value: 11,
        },
        {
          icon: <FaMapMarkerAlt key={3} size={8} />,
          value: 12,
        },
        {
          icon: <FaMapMarkerAlt key={4} size={12} />,
          value: 13,
        },
        {
          icon: <FaMapMarkerAlt key={5} size={16} />,
          value: 14,
        },
      ]}
    />
  );
}

export default MarkerSize;
