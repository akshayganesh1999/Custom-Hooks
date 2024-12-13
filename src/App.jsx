import './App.css'
import { Routes, Route } from 'react-router-dom'
import DataDisplay from './DataDisplay'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<DataDisplay />} />
      </Routes>
    </>
  )
}

export default App
