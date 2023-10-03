import PropTypes from "prop-types";
import { forwardRef } from "react";
import LeafletBox from "../UI/LeafletBox";

const Option = forwardRef(function Option({ children }, ref) {
  return (
    <LeafletBox ref={ref}>
      <section className="flex justify-between gap-2 px-2 text-gray-600">
        {children}
      </section>
    </LeafletBox>
  );
});
Option.propTypes = {
  children: PropTypes.element,
};
export default Option;
