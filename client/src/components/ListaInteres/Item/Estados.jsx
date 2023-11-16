import { Descriptions } from "antd";
import PropTypes from "prop-types"
function Estados({estadoCarta, estadoTicket}) {
    const items = [];
    if (estadoCarta) items.push({
        key: 1,
        label: "CARTA",
        children: <span>{estadoCarta}</span>
    })
    if (estadoTicket) items.push({
        key: 1,
        label: "TICKET CONSULTA",
        children: <span>{estadoTicket}</span>
    })
  return (
    <>
    <Descriptions items={items}/>
      {/* <div className="text-xs flex justify-end gap-4">
          {estadoCarta && (
              <p className="flex flex-wrap h-fit gap-x-1 justify-center">
              <span className="block h-fit">carta:</span>
              <span className="block h-fit">
              {estadoCarta}
              </span>
              </p>
              )}
              {estadoTicket && (
                  <p className="flex flex-wrap h-fit gap-x-1 justify-center">
                  <span className="block h-fit text-nowrap">
                  ticket consulta:
                  </span>
                  <span className="block h-fit">
                  {estadoTicket}
                  </span>
                  </p>
                  )}
                </div> */}
</>
  )
}
Estados.propTypes = {
    estadoCarta: PropTypes.any,
    estadoTicket: PropTypes.any,
};
export default Estados