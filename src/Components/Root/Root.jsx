import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
<div className="bg-white min-h-screen max-w-6xl mx-auto">
  <Header />
  <Outlet />

</div>


  
  )
}

export default Root
