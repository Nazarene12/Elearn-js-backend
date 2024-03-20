import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorComponent from './ErrorComponent'

export default function InputComponent(props) {
    const { label, name, ...rest } = props
    return (
        <div className='flex flex-col gap-1 font-lato'>
        <label htmlFor={name} className='text-xs'>{label}</label>
        <Field id={name} name={name} {...rest} className="border-0 outline-0 p-2 rounded-md ring-[1px] ring-offset-0 ring-gray-400 focus:border-0 focus-visible:border-0 placeholder:text-sm focus:ring-primary "/>
        <ErrorMessage component={ErrorComponent} name={name} />
        </div>
    )
}
