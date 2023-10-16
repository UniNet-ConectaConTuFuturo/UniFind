import { useId } from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
function CustomCheckBox({ label, onChange }) {
  const id = useId();
  <style>input::after.</style>;
  return (
    <>
      <label htmlFor={id} className="z-10 pointer-events-none px-1">
        {label}
      </label>
      <input
        type="checkbox"
        className={twMerge(
          "appearance-none bg-gray-100 m-0 grid place-content-center absolute left-1.5 top-1 right-1.5 bottom-1",
          "rounded-sm cursor-pointer border border-dashed border-teal-900",
          "transition-colors hover:bg-gray-300 hover:checked:bg-[#3498DB99] checked:bg-[#3498DBcc] "
        )}
        id={id}
        onChange={onChange}
      />
    </>
  );
}
CustomCheckBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
};
export default CustomCheckBox;
