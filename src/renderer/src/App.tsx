import { Route, Routes } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'

function App(): JSX.Element {
  return (
    <Routes>
      <Route index path="/" element={<Page1 />} />
      <Route index path="/page2" element={<Page2 />} />

      {/* <Route element={<ProtectedRoute isAllowed={true} />}>
      <Route path="/equipo" element={<EquipoMicrofinanzas />} />
      <Route path="/dashboard" element={<Login />} />
      <Route path="/next" element={<div>Next</div>} />
    </Route> */}
    </Routes>
  )
}

export default App
