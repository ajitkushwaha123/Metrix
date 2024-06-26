import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Order from './Pages/Order'
import Inventory from './Pages/Inventory'
import Settings from './Pages/Settings'
import Conversations from './Pages/Conversations'
import Support from './Pages/Support'
import Gift from './Pages/Gift'
import Logout from './Authentication/Logout'
import Customers from './Pages/Customers'
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import ForgetPassword from './Authentication/ForgetPassword'

function App() {

  return (
    <BrowserRouter>
      <div className='flex w-[100%]'>
        <div className=''>
           <Sidebar />
        </div>

        <div className='w-full'>
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/order' element={<Order />}/>
            <Route path='/inventory' element={<Inventory />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/conversations' element={<Conversations />}/>
            <Route path='/customers' element={<Customers />}/>
            <Route path='/support' element={<Support />}/>
            <Route path='/gift' element={<Gift />}/>
            <Route path='/logout' element={<Logout />}/>
          </Routes>

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
