import './App.css'
import IndexPage from './pages/IndexPage/IndexPage'
import CoastersPage from './pages/CoastersPage/CoastersPage'
import CoasterDetails from './pages/CoasterDetails/CoasterDetails'
import LoginPage from './pages/LoginPage/LoginPage'

import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

function App() {

  return (

    <div className="container">

      <Header />

      <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<CoastersPage />} />
        <Route path="/detalles/:coaster_id" element={<CoasterDetails />} />
        <Route path="/acceso" element={<LoginPage />} />

      </Routes>

    </div>
  )
}

export default App