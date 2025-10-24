import { Routes, Route} from 'react-router-dom'
import LandingPage from "./pages/LandingPage"
import Features from './pages/Features'


function App() {


  return (
   <Routes>       
          {/* public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<Features />} />
          {/* <Route path="/"element={<Login /> } /> */}
          {/* <PrivateRoute> */}
          {/* <Route path="/dashboard" element={<Dashboard />} />    */}
          {/* </PrivateRoute> */}
        </Routes>
  )
}

export default App
