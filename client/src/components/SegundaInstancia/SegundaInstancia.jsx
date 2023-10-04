function SegundaInstancia() {
  return (
    <div className='w-full'>
        <form className='w-full full h-48'>
            <textarea className='w-full h-36 outline-1 resize-none text-black border-1 border-black mt-3 overflow-hidden'
            >Usted ha sido seleccionado para pasar a la etapa de segunda instancia. Para demostrar que merece estar en nuestra institución, deberá presentarse el X día a las X horas.
            </textarea>
            <button className='text-black'>Generar Exámen</button>
        </form>
    </div>
  )
}

export default SegundaInstancia