import { Button, message, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./upload-input.override.css";
import PropTypes from "prop-types";

function UploadInput({ setFileList, fileList }) {
  return (
    <Upload
      action={() => null}
      onRemove={() => setFileList([])}
      beforeUpload={(file) => {
        const isPNG = file.type === "application/pdf";
        if (!isPNG) {
          message.error(`${file.name} is not a png file`);
        }
        //console.log(Upload.LIST_IGNORE);
        setFileList(isPNG ? [file] : []);
        return false;
      }}
      iconRender={() => (
        <img src="https://img.elo7.com.br/product/zoom/2BEDBE5/sconversao-de-arquivos-de-silhouette-para-pdf-ou-png-arquivo-de-corte.jpg" />
      )}
      onPreview={() => null}
      previewFile={(props) => console.log(props)}
      multiple={false}
      maxCount={1}
      fileList={fileList}
      listType="picture"
    >
      {fileList.length === 0 && (
        <Button icon={<UploadOutlined />} className="w-full text-left">
          Subir PDF
        </Button>
      )}
    </Upload>
  );
}
UploadInput.propTypes = {
  fileList: PropTypes.array,
  setFileList: PropTypes.func,
};
export default UploadInput;
