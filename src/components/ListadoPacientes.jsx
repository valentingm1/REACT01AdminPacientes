import Paciente from "./Paciente";

function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administrar {""}
        <span className="text-indigo-600 font-bold ">Pacientes y Turnos</span>
      </p>
      <Paciente></Paciente>
    </div>
  );
}

export default ListadoPacientes;
