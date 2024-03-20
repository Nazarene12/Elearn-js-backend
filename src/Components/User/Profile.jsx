import React from 'react'
import { NavLink , Link} from 'react-router-dom'

export default function Profile() {
  return (
    <div className='w-full flex'>
        <div className='w-1/5'>
            <nav className='flex flex-col gap-5'>
                {/* <NavLink to="/te/dash" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>DASHBOARD</NavLink> */}
                {/* { is_authenticated && (
                <>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>BLOG</NavLink>
                <NavLink to="/course" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>COURSE</NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>PROFILE</NavLink>
                </>
                )} */}
                {/* <NavLink to="/register/course" className={({ isActive }) => isActive ? 'text-primary' : 'text-black'}>UPLOAD COURSE</NavLink> */}
            </nav>
        </div>

        <div className='w-4/5'>
            BODY
        </div>
    </div>
  )
}
