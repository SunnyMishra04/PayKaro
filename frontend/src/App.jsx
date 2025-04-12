
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import { Toaster } from 'sonner'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import SendMoney from './components/SendMoney'
import Profile from './components/Profile'
import Update from './components/Update'
import Redirect from './components/Redirect'

function App() {

  return (
    <div className=''>
    <BrowserRouter>
    <Routes>
      <Route path ="/signup" element={<Signup/>} />
      <Route path ="signin" element={<Signin/>} />
      <Route path ="/dashboard" element={<Dashboard/>} />
      <Route path ="/send" element={<SendMoney/>} />
      <Route path ="/profile" element={<Profile/>} />
      <Route path ="/update" element={<Update/>} />
      <Route path="/" element={<Redirect to="/signin" />} />
    </Routes>
    </BrowserRouter>
    <Toaster/>
    </div>
  )
}

export default App