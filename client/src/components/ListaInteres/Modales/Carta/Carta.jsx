import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import "./FileUpload.css";

import EyeOuterHTML from "./EyeOuterHTML";
import PreviewPDF from "./PreviewPDF";
import Enviar from "./Enviar";

function Carta({ id_universidad }) {
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  useEffect(() => {
    const $uploadButtons = document.querySelector(
      ".ant-upload-list-item-actions"
    );
    console.log(fileList);
    if ($uploadButtons) {
      $uploadButtons.innerHTML =
        EyeOuterHTML + $uploadButtons.lastElementChild.outerHTML;
      $uploadButtons.firstElementChild.addEventListener("click", async () => {
        setPreviewVisible(true);
      });
      $uploadButtons.lastElementChild.addEventListener("click", () =>
        setFileList([])
      );
    }
  }, [fileList]);

  return (
    <>
      <h3 className="text-black text-xl font-semibold mb-2">Tu carta</h3>
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
      {previewVisible && (
        <PreviewPDF setPreviewVisible={setPreviewVisible} file={fileList[0]} />
      )}
      <Enviar
        disabled={fileList.length === 0}
        fileList={fileList}
        setFileList={setFileList}
        id_universidad={id_universidad}
      />
    </>
  );
}
Carta.propTypes = {
  id_universidad: PropTypes.number,
};

export default Carta;
