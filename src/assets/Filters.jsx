import {useState} from 'react'
function Filters({setSeverity}){
    
    return(
        <div className="d-flex gap-3 mt-4 ms-4">
            <select onChange={(e)=>setSeverity(e.target.value)}>
                <option value="">Serverity</option>
                <option  value="HIGH">High</option>
                <option  value="MEDIUM">Medium</option>
                <option  value="LOW">Low</option>
            </select>
            <select>
                <option>Status</option>
                <option>Resolved</option>
                <option>Unresolved</option>
            </select>
              <select>
                <option>Region</option>
                <option>ap-south-1</option>
                <option>us-east-1</option>
                  <option>eu-west-1</option>
            </select>
             <select>
                <option>ALL</option>
                <option>LOGIN</option>
                <option>DELETE_USER</option>
                  <option>CREATE_USER</option>
            </select>
        </div>

    )
}
export default Filters