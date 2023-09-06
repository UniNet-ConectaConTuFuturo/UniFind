import { useEffect } from "react";
import { useState } from "react";
import { post } from "../../api/api";
import Card from "../UI/Card";
import { useGlobal } from "../../hooks/useGlobal";
import "./HighlightList.css";
function HighlightList() {
  const { token } = useGlobal();
  const [favoritas, setFavoritas] = useState([]);
  useEffect(() => {
    if (typeof token === "string") {
      (async () =>
        setFavoritas(
          await post("/getfavorites", { token })
        ))();
    }
  }, [token]);
  return (
    <>
      <h1 className="display-1 mb-5 text-center"><a className="fancy-link">Lista de Interés</a></h1>
      <div className="flex flex-wrap gap-8 justify-start ml-40 mr-12 pb-10">
        {favoritas.map((u)=>(
              <Card key={u.id_universidad} id_universidad={u.id_universidad}/>
        ))}
      </div>
    </>
  );
}

export default HighlightList;
