import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(INITIAL)
  const [paciente, setPaciente] = useState({})
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

      setPacientes(pacientesActualizados)
  }



  return (
    <div className='container mt-20 mx-auto'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Form
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente= {paciente}
        setPaciente= {setPaciente}
        />
      <ListadoPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente= {eliminarPaciente}
      />
      </div>
      
    </div>
  )
}

export default App

