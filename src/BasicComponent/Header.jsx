import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const is_authenticated = useSelector((state) => state.auth.is_authenticated)
  return (
    <div className='w-100 flex justify-between items-center p-10'>

        <div>
          <h2>LOGO</h2>
        </div>

        <nav className='flex gap-5'>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>HOME</NavLink>
            { is_authenticated && (
            <>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>BLOG</NavLink>
              <NavLink to="/course" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>COURSE</NavLink>
              <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>PROFILE</NavLink>
            </>
            )}
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>ABOUT</NavLink>
        </nav>

        <div>
          {is_authenticated ? <Link to={"/logout"} className='p-2 rounded-md bg-secondary text-white'> LOGOUT </Link> : <Link to={"auth/login"} className='p-2 rounded-md bg-primary text-white'> LOGIN</Link>}
        </div>


      
    </div>
  )
}
