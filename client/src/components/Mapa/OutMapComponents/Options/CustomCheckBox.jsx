import { useId } from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
function CustomCheckBox({ label, onChange, disabled }) {
  const id = useId();
  <style>input::after.</style>;
  return (
    <Tooltip title={disabled ? "Debe iniciar sesión" : ""}>
      <label htmlFor={id} className="relative z-10 pointer-events-none px-1">
        {label}
      </label>
      <input
        type="checkbox"
        disabled={disabled}
        className={twMerge(
          "appearance-none bg-gray-100 m-0 grid place-content-center absolute left-1.5 top-1 right-1.5 bottom-1",
          "rounded-sm cursor-pointer border border-dashed border-teal-900",
          "transition-colors hover:bg-gray-300 hover:checked:bg-[#3498DB99] checked:bg-[#3498DBcc]",
          disabled ? "pointer-events-none" : ""
        )}
        id={id}
        onChange={onChange}
      />
    </Tooltip>
  );
}
CustomCheckBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
export default CustomCheckBox;
