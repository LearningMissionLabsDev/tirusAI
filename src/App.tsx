import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Landing from './pages/landing/Landing'
import AboutUs from './pages/aboutUs/AboutUs'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  )
}

export default App