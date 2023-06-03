
const Paciente = () => {
  return (
    <div className="bg-white mt-5 shadow-md m-3 px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Mascota: {""}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">Hook Propietario</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">Hook@Hook.Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">Hook/mm/yyyy</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            omnis. Maxime, labore laborum vero nemo consectetur corrupti ab
            asperiores itaque explicabo exercitationem quaerat! Sint maiores
            deserunt minima impedit quo veniam?
          </span>
        </p>
      </div>
  )
}

export default Paciente