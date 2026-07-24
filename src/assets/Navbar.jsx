import React from 'react'
function Navbar(){
    return(
        <nav className='d-flex justify-content-between align-items-center p-3 top-navbar'>
            <h2><i className="bi bi-shield-fill"></i>Security Audit</h2>
            <div >
                <i className="bi bi-person-fill me-2"></i>
            <span className="admin">Admin</span>
            </div>

        </nav>
    )
}
export default Navbar