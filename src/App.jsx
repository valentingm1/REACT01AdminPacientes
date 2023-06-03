import Form from './components/Form'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  return (
    <div className='container mt-20 mx-auto'>
      <Header/>
      <Form/>
      <ListadoPacientes/>
    </div>
  )
}

export default App

