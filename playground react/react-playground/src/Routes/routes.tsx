import { Routes, Route} from 'react-router-dom'

import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { Login } from '../pages/Login'
import { Error } from '../pages/Error'

export function MainRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/:id" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}