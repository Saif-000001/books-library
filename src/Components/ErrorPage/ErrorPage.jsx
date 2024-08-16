import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='text-center text-6xl'>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <Link to="/"><button className='btn btn-primary'>Go to Home</button></Link>
    </div>
  )
}

export default ErrorPage
