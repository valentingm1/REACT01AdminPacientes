
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const handleEliminar = () =>{
    const respuesta = confirm("Deseas eliminar este paciente?");
    if(respuesta){
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <div className="bg-white my-10 shadow-md mx-5 px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Mascota: {""}
          <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">
           {paciente.sintomas}
          </span>
        </p>
        <div className="flex justify-between mt-10">
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-md transition-all"
          onClick={() => {setPaciente(paciente)}}>
            Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white border-2 font-bold uppercase rounded-md transition-all"
            onClick={handleEliminar}>
            Eliminar
            </button>
        </div>
      </div>
      
  )
}

export default Paciente