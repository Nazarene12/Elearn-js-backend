import React from 'react'

export default function ErrorComponent(props) {
  return (
    <p className='text-red-700 text-xs'>{props.children}</p>
  )
}
