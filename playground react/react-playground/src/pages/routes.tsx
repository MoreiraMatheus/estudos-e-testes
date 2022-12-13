import { Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { Login } from '../pages/Login'

export function MainRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}