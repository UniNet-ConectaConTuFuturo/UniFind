import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {twMerge} from "tailwind-merge"

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
          className={twMerge(index === 0 ? "" : "my-4", "max-w-full min-w-fit")}
          key={`page_${index + 1}`}
          scale={1}
          pageNumber={index + 1}
        />
      );
    setPages(lista);
  }, [numPages, setPages]);
  return (
    <div className="w-fit flex justify-center max-h-[75vh] max-w-[75vw] overflow-y-scroll shadow-2xl shadow-black rounded-sm">
      <div className="w-fit h-fit">
        <Document
          options={options}
          file={file}
          className="w-full"
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
