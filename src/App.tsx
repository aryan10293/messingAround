import { Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import Features from './pages/Features'
import Sign from './pages/signup'

function App() {


  return (
   <Routes>       
          {/* public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/signup" element={<Sign />} />
          {/* <Route path="/"element={<Login /> } /> */}
          {/* <PrivateRoute> */}
          {/* <Route path="/dashboard" element={<Dashboard />} />    */}
          {/* </PrivateRoute> */}
        </Routes>
  )
}

export default App
