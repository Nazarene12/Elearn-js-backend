import React , { useRef} from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormControl from '../../FormComponents/FormControl'
import { useMutation } from 'react-query'
import {forgotRequest} from "../../EndPoints/Request"


export default function Forgot() {
    const mutation = useMutation(forgotRequest)
    const formRef = useRef();
    const initialValues = {
        email: ''
    }
    
    const validationSchema = Yup.object({
        email: Yup.string()
          .required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
        mutation.mutate(values,{
            onSuccess:(data)=>{
                console.log(data);
                formRef.current.reset();
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
                        <Form className="flex flex-col gap-3" ref={formRef}>

                            <FormControl control='input' type='email' label='Email' name='email'/>
                                        
                            <input type="submit" className="w-full bg-primary p-2 rounded-lg uppercase text-white" value="enter" />

                        </Form>
                    </div>
                )
      }}
    </Formik>
    )
}
