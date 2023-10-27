import { Empty } from "antd";

const CustomEmpty = () => (
    <Empty
      imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
      style={{ fontWeight: 700 }}
      description="Lista vacia"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
)
export default CustomEmpty;