import React , {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Outlet } from 'react-router'
import Header from '../BasicComponent/Header'
import { Link } from 'react-router-dom'

export default function AuthLayout3() {

    const authenticated = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!authenticated?.is_authenticated){
            navigate("/auth/login")
        }
        if (authenticated?.user?.type != "AD"){
            navigate("/home")
        }
    },[])
  return (
    <div className='w-full'>
        <div className="w-full bg-primary h-16 flex justify-center items-center">
            <h2 className='text-white'>DASHBOARD</h2>
        </div>
        <div className='flex'>
            <div className="w-1/5 px-5 py-10">
                <Link to={"category"}>Category</Link>
            </div>
            <div className="w-4/5 px-5 py-10">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
