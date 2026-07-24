import {useState} from 'react'
function Searchbar({search,setSearch}){
   
    return(

        <div className="d-flex search">
            
                 <span >
            <i className="bi bi-search"></i>
            </span>
            <input type="text"   className="inputbox" placeholder="search logs" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            
           
        </div>

    )
}
export default Searchbar