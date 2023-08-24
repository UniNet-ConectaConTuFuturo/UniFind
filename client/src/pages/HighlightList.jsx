import Card from "../components/UI/Card";
import "./HighlightList.css";
function HighlightList() {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full">
      <div className="py-6 mx-auto">
      <h1 class="display-1 mb-5"><a className="fancy-link">Lista de Interés</a></h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm align-items-stretch h-100">
              <div className="mx-auto">
                <Card />
              </div>
            </div>
            <div className="col-sm align-items-stretch h-100">
              <div className="mx-auto">
                <Card />
              </div>
            </div>
            <div className="col-sm align-items-stretch h-100">
              <div className="mx-auto">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightList;
