import { Textfit } from 'react-textfit'
import React from 'react'

export const Screen = ({value}) => {
  return (
    <>
        <Textfit className='screen' mode='single'>
            {value}
        </Textfit>
    </>
  )
}
