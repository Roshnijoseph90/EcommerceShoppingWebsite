import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
          
            <li><Link to="/">Home </Link></li>
            <li><Link to="/login">Products</Link></li>
            <li><Link to="/login">Login </Link></li>
            <li  className="nav-logout"><Link to="/login">Logout </Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}

export default Root
