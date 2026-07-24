import Searchbar from './Searchbar'
import  Filters from './Filters'
import Auditable from './Auditable'
import {useState} from 'react'

function Dashboard(){
   const [search, setSearch]=useState("")
   const [severity, setSeverity] = useState("");
    return(
        <div>
        <div className="dash">
            <h4>Dashboard</h4>
            
            

</div>

<div className="dashboard-content ">

<div className="row g-3">
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Total Logs</h5>
        <p className="card-text">5</p>
        
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">High</h5>
        <p className="card-text">2</p>
        
      </div>
    </div>
  </div>
  
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Resolved</h5>
        <p className="card-text">3</p>
        
      </div>
    </div>
  </div>
  <div className="col-md-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Unresolved</h5>
        <p className="card-text">2</p>
        
      </div>
    </div>
  </div>
</div>

        </div>
        <Searchbar
        search={search}
        setSearch={setSearch}/>
        <Filters setSeverity={setSeverity}/>
       <Auditable 
 search={search}
 severity={severity}
/>
        </div>
        

    )
}
export default Dashboard