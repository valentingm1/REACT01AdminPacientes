import React from "react";

function Form() {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administrarlos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="NombreMascota"
          >
            Mascota
          </label>
          <input
            type="text"
            name="NombreMascota"
            id="NombreMascota"
            placeholder="Nombre mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="NombrePropietario"
          >
            Propietario
          </label>
          <input
            type="text"
            name="NombrePropietario"
            id="NombrePropietario"
            placeholder="Nombre completo Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date"
          >
            Alta
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md "
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Síntomas
          </label>
          <textarea
            name="sintomas"
            id="sintomas"
            placeholder="Descripción de los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 p-3 w-full text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
          value="AGREGAR PACIENTE"
        />
      </form>
    </div>
  );
}

export default Form;
