import PropTypes from "prop-types";
function Estados({ estadoCarta, estadoTicket }) {
  return (
    <div className="text-xs flex justify-end gap-4 text-gray-400">
      {estadoCarta && (
        <p className="flex flex-wrap h-fit gap-x-1 justify-center">
          <dt className="block h-fit">carta:</dt>
          <dd className="block h-fit">{estadoCarta}</dd>
        </p>
      )}
      {estadoTicket && (
        <p className="flex flex-wrap h-fit gap-x-1 justify-center">
          <dt className="block h-fit text-nowrap">ticket consulta:</dt>
          <dd className="block h-fit">{estadoTicket}</dd>
        </p>
      )}
    </div>
  );
}
Estados.propTypes = {
  estadoCarta: PropTypes.any,
  estadoTicket: PropTypes.any,
};
export default Estados;
