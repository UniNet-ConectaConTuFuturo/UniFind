import { Modal } from "antd";
import PropTypes from "prop-types";

function LogOut({ setToken, trigger, setTrigger }) {
  return (
    <Modal
      open={trigger}
      onCancel={() => setTrigger(false)}
      onOk={() => setToken("")}
      title="¿Querés cerrar sesión?"
      centered
    />
  );
}
LogOut.propTypes = {
  setToken: PropTypes.func,
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
};
export default LogOut;
