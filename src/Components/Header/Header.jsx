import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const linking = <>
   <Link to = "/"><button class="border-2 border-transparent bg-white text-black px-4 py-2 text-lg focus:border-green-500 focus:text-green-500 focus:font-bold rounded-lg">
         Home
    </button></Link> 
    <Link to="/listedBooks"><button class="border-2  border-transparent bg-white text-black px-4 py-2 text-lg focus:border-green-500 focus:text-green-500 focus:font-bold rounded-lg">
        Listed Books
    </button></Link>
    <Link to="/pagesToRead"><button class="border-2  border-transparent bg-white text-black px-4 py-2 text-lg focus:border-green-500 focus:text-green-500 focus:font-bold rounded-lg">
    Pages to Read
    </button></Link>
  </>
  return (
    <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content">
          {
            linking
          }
      </ul>
    </div>
    <a className=" btn-primary text-2xl font-bold">Books Library</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal ">
      {
        linking
      }
    </ul>
  </div>
  <div className="navbar-end">
 
  <button type="button" className="text-white bg-green-800 hover:bg-green-500 focus:ring-4 font-medium rounded-lg text-sm px-6 py-4 me-2 mb-2 dark:bg-green-500 ">Sing In</button>
  <button type="button" className="text-white bg-cyan-800 hover:bg-cyan-500 focus:ring-4 font-medium rounded-lg text-sm px-6 py-4 me-2 mb-2 dark:bg-cyan-500 ">Sing Up</button>
 
  </div>
</div>
  )
}

export default Header
