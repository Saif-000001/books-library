import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
   <div className="bg-stone-100  p-0 m-5">
    <div className="card  lg:card-side m-10">
        <div className="mt-48 max-w-xl">
          <h2 className="card-title text-6xl text-gray-700 font-sans">Books to freshen up your bookshelf</h2>
          <div className='mt-10'>
          <Link to="/listedBooks">
          <button type="button" className="text-white bg-green-800 hover:bg-green-500 focus:ring-4 font-medium rounded-lg text-sm px-6 py-4 me-2 mb-2 dark:bg-green-500 ">View The List</button>
          </Link>
          </div>
        </div>
        <div className="p-5 m-10 text-center bg-current">
        <img
            className="h-96 w-80 "
            src="https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg"
            alt="book"
        />
      </div>

    </div>
   </div>
  )
}

export default Banner
