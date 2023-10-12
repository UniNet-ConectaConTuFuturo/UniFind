import { components } from "react-select";
import { Tooltip } from "antd";

/* const InlineDialog = styled(TooltipPrimitive)`
  background: white;
  border-radius: ${token("border.radius", "4px")};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-sizing: content-box; // do not set this to border-box or it will break the overflow handling
  color: #333;
  max-height: 300px;
  max-width: 300px;
  padding: ${token("space.100", "8px")} ${token("space.150", "12px")};
`; */
const MultiValueLabel = (props) => {
  console.log(props.data.title);
  return(
  <Tooltip
    title={props.data.title}
  >
    <div>

    <components.MultiValueLabel {...props}>
      {props.data.selectedOption || props.data.label}
    </components.MultiValueLabel>
    </div>
  </Tooltip>
)};
export default MultiValueLabel;
