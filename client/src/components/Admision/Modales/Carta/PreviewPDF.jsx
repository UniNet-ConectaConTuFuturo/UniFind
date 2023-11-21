import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
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

function PreviewPDF({ file }) {
  const [numPages, setNumPages] = useState();
  const [Pages, setPages] = useState([]);
  useEffect(() => {
    const lista = [];
    for (let index = 0; index < numPages; index++)
      lista.push(
        <Page
          className={index === 0 ? "" : "my-4"}
          scale={0.8}
          key={`page_${index + 1}`}
          pageNumber={index + 1}
        />
      );
    setPages(lista);
  }, [numPages, setPages]);
  return (
    <div className="w-fit flex justify-center max-h-[75vh] overflow-y-scroll shadow-2xl shadow-black rounded-sm">
      <div className="w-fit h-fit">
        <Document
          options={options}
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Suspense>{Pages}</Suspense>
        </Document>
      </div>
    </div>
  );
}
PreviewPDF.propTypes = {
  file: PropTypes.any,
};
export default PreviewPDF;
