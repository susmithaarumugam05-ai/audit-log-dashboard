import React from 'react'
import Navbar from './assets/Navbar'
import Sidebar from './assets/Sidebar'
import Dashboard from './assets/Dashboard'



function App() {
  return (
    <div>
        <div><Navbar/></div>
        <div className="main-content d-flex  ">
        <div className="w-25 ms-4"><Sidebar/></div>
        <div className="w-75 me-5"><Dashboard/></div>
      
        
        </div>
    </div>
  
  )
}

export default App


// npx json-server data/data.json --port 3000

