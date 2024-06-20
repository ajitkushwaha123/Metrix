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
import Logout from './Pages/Logout'
import Customers from './Pages/Customers'

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
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
