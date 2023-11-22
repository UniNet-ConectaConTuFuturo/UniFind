import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import EyeOuterHTML from "./EyeOuterHTML";
import PreviewPDF from "./PreviewPDF";
import Enviar from "./Enviar";
import UploadInput from "./UploadInput";

function Carta({ id_universidad }) {
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  //File Button Actions
  useEffect(() => {
    const $uploadButtons = document.querySelector(
      ".ant-upload-list-item-actions"
    );
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
      <UploadInput setFileList={setFileList} fileList={fileList} />
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
