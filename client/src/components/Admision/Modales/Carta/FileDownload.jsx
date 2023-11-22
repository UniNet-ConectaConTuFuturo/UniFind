import PropTypes from "prop-types";

function FileDownload({ file }) {
  return (
    <a
      className="hover:text-inherit"
      href={file ? window.URL.createObjectURL(file) : ""}
      download
    >
      Descargar
    </a>
  );
}
FileDownload.propTypes = {
  file: PropTypes.any,
};

export default FileDownload;
