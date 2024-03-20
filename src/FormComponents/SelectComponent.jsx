import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorComponent from './ErrorComponent'

function SelectComponent (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='flex flex-col gap-1 font-lato'>
        <label htmlFor={name} className='text-xs'>{label}</label>

        <Field as='select' id={name} name={name} {...rest} className="border-0 outline-0 p-2 
        rounded-md ring-[1px] ring-offset-0 ring-gray-400 focus:border-0 focus-visible:border-0 
        placeholder:text-sm focus:ring-primary ">
            {options.map(option => {
            return (
                <option key={option.value} value={option.value}>
                    {option.key}
                </option>
            )
            })}
        </Field>
      <ErrorMessage component={ErrorComponent} name={name} />
    </div>
  )
}

export default SelectComponent