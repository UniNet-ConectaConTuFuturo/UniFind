import PropTypes from "prop-types";
import { components } from "react-select";

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
  return (
    <components.MultiValueLabel {...props}>
        {props.data.selectedOption || props.data.label}
      </components.MultiValueLabel>
  );
  {/* <Tooltip component={InlineDialog} content={props.data.title}> */}
  /* </Tooltip> */
};
MultiValueLabel.propTypes = {
  data: PropTypes.object,
};
export default MultiValueLabel;
