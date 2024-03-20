import React from 'react'
import InputComponent from './InputComponent'
import SelectComponent from './SelectComponent'

function FormControl (props) {
    const { control, ...rest } = props
    switch (control) {
      case 'input':
        return < InputComponent {...rest} />
    //   case 'textarea':
    //     return <Textarea {...rest} />
      case 'select':
        return <SelectComponent {...rest} />
    //   case 'radio':
    //     return <RadioButtons {...rest} />
    //   case 'checkbox':
    //     return <CheckboxGroup {...rest} />
    //   case 'date':
    //     return <DatePicker {...rest} />
    //   case 'chakraInput':
    //     return <ChakraInput {...rest} />
      default:
        return null
    }
  }
  
  export default FormControl