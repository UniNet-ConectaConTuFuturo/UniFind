import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { createPortal } from "react-dom";
import { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

function PreviewPDF({ file, setPreviewVisible }) {
  const [numPages, setNumPages] = useState();
  const [Pages, setPages] = useState([]);
  useEffect(() => {
    const lista = [];
    for (let index = 0; index < numPages; index++)
      lista.push(
        <Page
          className="my-4"
          scale={0.8}
          key={`page_${index + 1}`}
          pageNumber={index + 1}
        />
      );
    setPages(lista);
  }, [numPages, setPages]);
  return (
    <>
      {createPortal(
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-[9999] flex justify-center  overflow-y-scroll bg-black bg-opacity-75"
          onClick={() => setPreviewVisible(false)}
        >
          <div className="w-fit h-fit">
            <Document
              options={options}
              file={file}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
              <Suspense>{Pages}</Suspense>
            </Document>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
PreviewPDF.propTypes = {
  file: PropTypes.any,
  setPreviewVisible: PropTypes.func,
};
export default PreviewPDF;
