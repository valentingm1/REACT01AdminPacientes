import { useState } from "react";
import Paciente from "./Paciente";

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Administrar {""}
          <span className="text-indigo-600 font-bold ">Pacientes y Turnos</span>
        </p>
        
        {
        pacientes.map((paciente, index) =>{
          return <Paciente 
          paciente={paciente}
          key={paciente.id}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
        })
        }
      </>
      )  : (
        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Agrega un nuevo paciente y {""}
          <span className="text-indigo-600 font-bold ">Aparecerá Aquí</span>
        </p>
        </>
      )}

      

      
      
    </div>
  );
}

export default ListadoPacientes;
