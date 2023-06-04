import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  return (
    <div className='container mt-20 mx-auto'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Form
        setPacientes={setPacientes}
        pacientes={pacientes}
        />
      <ListadoPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      />
      </div>
      
    </div>
  )
}

export default App

