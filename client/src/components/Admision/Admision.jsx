import Interesados from "./Interesados"
import "../ListaInteres/ListaInteres.css"

function Admision() {
  return (
    <>
      <h1 className="display-1 mb-5 text-center">
        <a className="fancy-link">Interesados</a>
      </h1>
      <div className="flex flex-wrap gap-8 justify-start ml-40 mr-12 pb-10">
        <Interesados />
        <Interesados />
      </div>
    </>
  )
}

export default Admision