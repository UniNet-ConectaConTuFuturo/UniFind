import { Empty, List } from "antd";
import Item from "./Item/Item";
import { useLoaderData } from "react-router-dom";

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
        <div className="bg-[#fff2] rounded-md p-4">
          <Empty
            imageStyle={{ opacity: 0.5, filter: "invert(1)" }}
            style={{ fontWeight: 700 }}
            description="Lista vacia"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </div>
      )}
    </>
  );
}

export default Lista;
