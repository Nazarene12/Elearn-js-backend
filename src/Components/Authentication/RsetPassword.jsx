import React , {useState , useRef , useEffect} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from '../../FormComponents/FormControl'
import { useMutation } from 'react-query'
import {resetRequest} from "../../EndPoints/Request"
import { useLocation , useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

export default function ResetPassword() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const myParam = queryParams.get('id');
    const [showPassword, setShowPassword] = useState(false);
    const mutation = useMutation(resetRequest)
    const formRef = useRef();
    const navigate = useNavigate()

    const initialValues = {
        password: '',
        confrim_password: ''
    }
    
    const validationSchema = Yup.object({
        
        password: Yup.string().required('Required'),

        confrim_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
    })

    const onSubmit = values => {
        mutation.mutate([values , myParam],{
            onSuccess:(data)=>{
                console.log(data);
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Password has been successfully reset",
                  });
                formRef.current.reset();

            },
            onError : (error)=>{
                console.log(error.response.data);
                Swal.fire({
                    icon: "error",
                    title: "Invalid",
                    text: "Unautherized Request",
                  })
                //   .then((result) => {
                //     if (result.isConfirmed || result.isDismissed) {
                //       navigate('auth/login')
                //     }
                //   });
                
            }
        })
    }

    useEffect(()=>{
        if (!myParam){
            navigate('auth/login')
        }

    },[])


    return (

         <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => {
                return (
                    <div className="w-full flex flex-col justify-center items-center">
                        <div className="w-1/4 min-h-screen flex flex-col justify-center ">

                        
                            <div className="mb-10">
                                <h1 className="font-lato font-bold text-lg uppercase">welcome</h1>
                                <p className="font-lato font-medium text-sm">Reset Password of you account</p>
                            </div>
                            <Form className="flex flex-col gap-3 w-full" ref = {formRef}>
                                
                                <FormControl control='input' type={showPassword ? "text" : "password"} label='Password' name='password'/>
                                <FormControl control='input' type={showPassword ? "text" : "password"} label='Confrim Password' name='confrim_password'/>
                                
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

                                </div>
                                <input type="submit" className="w-full bg-primary p-2 rounded-lg uppercase text-white" value="enter" />
                            </Form>
                        </div>
                    </div>
                )
      }}
    </Formik>
    )
}
