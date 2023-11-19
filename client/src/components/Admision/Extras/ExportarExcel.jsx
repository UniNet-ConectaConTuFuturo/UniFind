function ExportarExcel() {
  return (
    <a
      href="http://localhost:4000/api/exportarexcel"
      target="_blank"
      rel="noreferrer"
      className="text-black group transition duration-300 underline decoration-dashed underline-offset-[6.5px] hover:underline hover:decoration-dashed hover:underline-offset-[6.5px]"
    >
      Exportar .xlsx
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
    </a>
  );
}

export default ExportarExcel;
