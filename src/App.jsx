import { LayoutBase } from "./pages/LayoutBase"
import { LandingPage } from "./pages/LandingPage"
import { About } from "./pages/About/about"
import { Certificates } from "./pages/Certificates/certificates"
import { Contact } from "./pages/Contact/contact"
import './App.css'
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'


export function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />} >
          <Route index element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1 className="not-found">404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}