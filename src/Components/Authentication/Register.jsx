import React , {useState} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from '../../FormComponents/FormControl'
import { useMutation } from 'react-query'
import {registerRequest} from "../../EndPoints/Request"
import { gender , user_type } from '../../Constants/Formoptions'

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const mutation = useMutation(registerRequest)

    const initialValues = {
        email: '',
        password: '',
        confrim_password:'',
        phone_number:'',
        dob:"",
        address:'',
        gender:'',
        user_type:'',
        first_name:'',
        last_name:''
    }
    
    const validationSchema = Yup.object({
        email: Yup.string()
          .email('Invalid email format')
          .required('Required'),
        password: Yup.string().required('Required'),
        confrim_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required'),
        phone_number: Yup.string()
          .matches(/^[0-9]{10}$/, 'Invalid phone number format')
          .required('Required'),
        dob: Yup.date()
          .min(new Date(1900, 0, 1), 'Date of birth must be after 1900-01-01')
          .max(new Date(), 'Date of birth must be in the past')
          .required('Required'),
        address: Yup.string()
        //   .min(10, 'Address must be at least 10 characters')
        //   .max(255, 'Address must be at most 255 characters')
          .required('Required'),
        gender: Yup.string()
          .oneOf(['male', 'female', 'other'], 'Invalid gender')
          .required('Required'),
        user_type: Yup.string()
          .oneOf(['US', 'ST'], 'Invalid user type')
          .required('Required'),
        first_name: Yup.string()
          .min(2, 'First name must be at least 2 characters')
          .max(50, 'First name must be at most 50 characters')
          .required('Required'),
        last_name: Yup.string()
          
      });

    const onSubmit = values => {
        console.log('Form data', values)
        mutation.mutate(values,{
            onSuccess:(data)=>{
                console.log(data);
                
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
                    <div className="w-2/3">
                        <div className="mb-10">
                            <h1 className="font-lato font-bold text-lg uppercase">welcome</h1>
                            <p className="font-lato font-medium text-sm">Enter the credential to login to your account</p>
                        </div>
                        <Form className="flex flex-col gap-3 w-100">
                            <div className="w-100 flex gap-1">
                                <div className="w-1/2">
                                    <FormControl control='input' type='text' label='First Name' name='first_name'/>
                                </div>
                                <div className="w-1/2">
                                    <FormControl control='input' type='text' label='Last Name' name='last_name'/>
                                </div>
                            </div>
                            <FormControl control='input' type='email' label='Email' name='email'/>

                            <div className="w-100 flex gap-1">
                                <div className="w-1/2">
                                    <FormControl control='input' type={showPassword ? "text" : "password"} label='Password' name='password'/>
                                </div>
                                <div className="w-1/2">
                                    <FormControl control='input' type={showPassword ? "text" : "password"} label='Confrim Password' name='confrim_password'/>
                                </div>
                            </div>
                            
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
                            <div className="w-100 flex gap-1">
                                <div className="w-1/2">
                                    <FormControl control='select'  label='Gender' options={gender} name='gender'/>
                                </div>
                                <div className="w-1/2">
                                    <FormControl control='input' type="date" label='Date of Brith' name='dob'/>
                                </div>
                            </div>
                            <div className="w-100 flex gap-1">
                                <div className="w-1/2">
                                    <FormControl control='select'  label='Currently' options={user_type} name='user_type'/>
                                </div>
                                <div className="w-1/2">
                                    <FormControl control='input' type="number" label='phone number' name='phone_number'/>
                                </div>
                            </div>
                            <FormControl control='input' type='text' label='address' name='address'/>
                            

                            
                            
                            <input type="submit" className="w-full bg-primary p-2 rounded-lg uppercase text-white" value="Login" />
                        </Form>
                    </div>
                )
      }}
    </Formik>
    )
}
