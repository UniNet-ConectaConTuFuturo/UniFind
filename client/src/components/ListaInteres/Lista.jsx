import { List } from "antd";
import Item from "./Item/Item";
import { useLoaderData } from "react-router-dom";
import CustomEmpty from "../UI/CustomEmpty";
function Lista() {
  const favoritas = useLoaderData();
  return (
    <>
      {favoritas.length ? (
        <List
          pagination={{ align: "center", pageSize: 3 }}
          dataSource={favoritas}
          renderItem={(u) => (
            <Item key={u.id_universidad} id_universidad={u.id_universidad} />
          )}
        />
      ) : (
        <div className="bg-[#0002] rounded-md p-4 invert">
          <CustomEmpty />
        </div>
      )}
    </>
  );
}

export default Lista;
