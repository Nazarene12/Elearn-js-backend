import React , {useEffect} from 'react'
import img from '../../public/banners/auth_banner.jpg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Outlet } from 'react-router'

export default function AuthLayout() {
    const is_authenticated = useSelector((state) => state.auth.is_authenticated)
    const navigate = useNavigate()
    useEffect(()=>{
        if (is_authenticated){
            navigate('/user/home')
        }
    },[])
    return (
        <main className="w-screen flex">
            <div className="lg:w-1/2 h-screen overflow-y-scroll  w-full min-h-screen flex justify-center items-center">
              <Outlet/>  
            </div>
            <div className="w-1/2 hidden lg:block relative h-screen">
                <img src={img}  alt="banner" className="rounded-l-xl object-cover z-10 w-full h-full" />
            </div>   
        </main>
    )
}
