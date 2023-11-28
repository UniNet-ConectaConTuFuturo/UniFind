import { Carousel, Popconfirm } from "antd";
import { post } from "../../api/api";
import PropTypes from "prop-types";
function Footer({ form }) {
  return (
    <div className="mt-4 pt-4 px-4 bg-white/10">
      <Carousel className="pb-6">
        <div className="flex justify-end gap-4">
          <button
            type="reset"
            className="py-1 px-2 border shadow-2xl shadow-black rounded-sm border-gray-500 hover:border-white text-gray-500 hover:text-white"
          >
            Cancelar
          </button>
          <button
            onClick={async () => await post("/config-account", { form })}
            type="submit"
            className="py-1 px-2 border shadow-2xl shadow-black rounded-sm border-gray-500 hover:border-white text-gray-500 hover:text-white"
          >
            Guardar
          </button>
        </div>
        <div className="flex justify-end gap-4">
          <Popconfirm
            title={<b className="font-bold">IMPORTANTE</b>}
            description={
              <p className="mr-2 my-2 -ml-4 font-semibold">
                La cuenta no se podrá recuperar.
              </p>
            }
            okText="Eliminar"
            okType="danger"
            cancelText="Cancelar"
          >
            <button
              onClick={async () => {
                await post("/borrar/cuenta");
                window.location.reload();
              }}
              type="submit"
              className="py-1 px-2 border shadow-2xl shadow-black rounded-sm border-red-950 hover:border-red-800 text-red-950 hover:text-red-800"
            >
              Borrar Cuenta
            </button>
          </Popconfirm>
        </div>
      </Carousel>
    </div>
  );
}
Footer.propTypes = {
  form: PropTypes.any,
};
export default Footer;
