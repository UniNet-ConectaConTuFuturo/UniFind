import { List } from "antd";
import Interesado from "./Item/Interesado";
import PropTypes from "prop-types";
function Lista({ lista }) {
  return (
    <List
      dataSource={lista}
      renderItem={(u) => (
        <Interesado key={u.id_usuario} id_usuario={u.id_usuario} />
      )}
    />
  );
}
Lista.propTypes = {
  lista: PropTypes.array,
};
export default Lista;
