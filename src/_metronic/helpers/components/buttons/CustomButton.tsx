import React, {FC} from 'react'
import { KTIcon } from '../KTIcon'

interface Props {
    handleClick: () => void
  title: string,
  children:React.ReactNode
  disabled?:boolean
}
export const CustomButton: FC<Props> = ({title, handleClick,children,disabled}) => {
  return (
    <button type='button' className='btn btn-danger py-3 px-3' onClick={handleClick} disabled={disabled}>
      {children} {title}
    </button>
  )
}
