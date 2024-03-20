import React , {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Outlet } from 'react-router'
import Header from '../BasicComponent/Header'
export default function AuthLayout2() {
    const is_authenticated = useSelector((state) => state.auth.is_authenticated)
    const navigate = useNavigate()
    useEffect(()=>{
        if (!is_authenticated){
            navigate('/auth/login')
        }
        navigate('/home')
    },[])
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
