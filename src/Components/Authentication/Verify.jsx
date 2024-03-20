import React , {useEffect , useState} from 'react'
import { useLocation , useNavigate} from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { useMutation } from 'react-query'
import { verifyRequest } from '../../EndPoints/Request';

export default function Verify() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const myParam = queryParams.get('id');
    const navigate = useNavigate()
    const mutate = useMutation(verifyRequest)
    const [loading , setLoading] = useState(true)
    const [status , setStatus] = useState(false)

    useEffect(()=>{
        if (!myParam){
            navigate('/auth/login')
        }
        mutate.mutate(myParam , {
            onSuccess:(data)=>{
                console.log(data);
                setLoading(false)
                setStatus(true)
            },
            onError : (error)=>{
                console.log(error.response.data);
                setLoading(false)
            }
        })

    },[])

  return (
    <div className='w-100 min-h-screen flex justify-center items-center'>
      {loading ? <BarLoader color="#FE9AAD" /> : (
        status ? <p>verified</p> : <p>Invalid</p>
      )}

    </div>
  )
}
