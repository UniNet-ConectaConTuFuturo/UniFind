import { useEffect } from "react";
import { useState } from "react";
import { post } from "../api/api";
import Card from "../components/UI/Card";
import { useGlobal } from "../hooks/useGlobal";
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
    <div className="d-flex flex-column flex-lg-row h-lg-full">
      <div className="py-6 mx-auto">
      <h1 className="display-1 mb-5"><a className="fancy-link">Lista de Interés</a></h1>
        <div className="ml-40 mr-16">
          <div  className="flex flex-wrap gap-8 justify-start">
          {favoritas.map((u)=>(
              <div key={u.id_universidad} className="w-72 h-48">
                <Card id_universidad={u.id_universidad}/>
              </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightList;
