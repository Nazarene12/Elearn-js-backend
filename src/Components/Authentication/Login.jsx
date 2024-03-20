import React , {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from '../../FormComponents/FormControl'
import { useMutation } from 'react-query'
import {loginRequest} from "../../EndPoints/Request"
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Auth/AuthSlice'
import { useNavigate } from 'react-router'


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const mutation = useMutation(loginRequest)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        username: '',
        password: ''
    }
    
    const validationSchema = Yup.object({
        username: Yup.string()
          .email('Invalid email format')
          .required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        mutation.mutate(values,{
            onSuccess:(data)=>{
                dispatch(login(data))
                if (data?.user?.type === 'AD'){
                    return navigate('/admin/home')
                }
                navigate('/home')
            },
            onError : (error)=>{
                console.log(error.response.data);
            }
        })
    }


    return (

         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => {
                return (
                    <div className="w-1/2 ">
                    <div className="mb-10">
                        <h1 className="font-lato font-bold text-lg uppercase">welcome</h1>
                        <p className="font-lato font-medium text-sm">Enter the credential to login to your account</p>
                    </div>
                        <Form className="flex flex-col gap-3">
                            <FormControl control='input' type='email' label='Email' name='username'/>
                            
                            <FormControl control='input' type={showPassword ? "text" : "password"} label='Password' name='password'/>
                            
                            <div className="w-full flex justify-between">
                                <div className="flex gap-1">
                                    <input
                                    type="checkbox"
                                    id="showPassword"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                    />
                                    <label htmlFor="showPassword" className="font-lato font-medium text-xs">show password</label>
                                </div>
                                <p className="font-lato font-medium text-xs">Forgot Password ?</p>

                            </div>
                            <input type="submit" className="w-full bg-primary p-2 rounded-lg uppercase text-white" value="Login" />
                        </Form>
                    </div>
                )
      }}
    </Formik>
    )
}
