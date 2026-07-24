
import {useEffect,useState} from 'react'
function Auditable({search, severity}){
    const[logs, setLogs]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/logs")
        .then((res)=>res.json())
        .then((data)=>setLogs(data))
    },[])
    const filteredLogs = logs.filter((log)=>

    (
    log.actor.toLowerCase().includes(search.toLowerCase()) ||
    log.action.toLowerCase().includes(search.toLowerCase()) ||
    log.resource.toLowerCase().includes(search.toLowerCase())
    )

    &&
    
    (
    severity === "" || log.severity === severity
    )

);
    return(
        <div className="mt-4 ms-4">
            <h5>Audit Logs</h5>

      <table className="table">
        <thead >
          <tr>
            <th>Actor</th>
            <th>Role</th>
            <th>Action</th>
            <th>Resource</th>
            <th>Resource Type</th>
            <th>IP Address</th>
            <th>Region</th>
            <th>Severity</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
            {filteredLogs.map((log)=>(
                <tr key={log.id}>
            <td>{log.actor}</td>
            <td>{log.role}</td>
            <td>{log.action}</td>
            <td>{log.resource}</td>
            <td>{log.resourceType}</td>
            <td>{log.ipAddress}</td>
            <td>{log.region}</td>
            <td>{log.severity}</td>
            <td>{log.status}</td>
            <td>{log.timestamp}</td>
          </tr>
          ))}
        </tbody>
      </table>
      </div>
            )}
          
    
export default Auditable