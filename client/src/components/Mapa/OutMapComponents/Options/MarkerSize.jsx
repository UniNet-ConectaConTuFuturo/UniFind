import { ConfigProvider, Segmented } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import "./markersize.css";
import { useMapa } from "../../../../hooks/useMapa";
function MarkerSize() {
  const { setMarkerSize, markerSize } = useMapa();
  return (
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            /* here is your component tokens */
            itemSelectedBg: "#3498DBcc",
          },
        },
      }}
    >
      <Segmented
        size="small"
        defaultValue={markerSize}
        onChange={(size) => setMarkerSize(size)}
        options={[
          {
            icon: <BiHide key={2} size={16} />,
            value: 0,
          },
          {
            icon: <FaMapMarkerAlt key={3} size={8} />,
            value: 0.5,
          },
          {
            icon: <FaMapMarkerAlt key={4} size={12} />,
            value: 0.75,
          },
          {
            icon: <FaMapMarkerAlt key={5} size={16} />,
            value: 1,
          },
        ]}
      />
    </ConfigProvider>
  );
}

export default MarkerSize;
