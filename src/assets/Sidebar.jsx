function Sidebar(){
    return(
        <div className=" d-flex flex-column gap-3 sidebar">
            
            <div><i className="bi bi-bar-chart-line-fill me-2"></i>Dashboard</div>
            <div><i className="bi bi-folder2 me-2"></i>Upload Logs</div>
            <div><i className="bi bi-clipboard2-data me-2"></i>Audit Logs</div>
            <div><i className="bi bi-search me-2"></i>Investigation</div>
            <div><i className="bi bi-graph-up me-2"></i>Reports</div>
            <div><i className="bi bi-gear-fill me-2"></i>Settings</div>
    
        </div>


    )
}
export default Sidebar