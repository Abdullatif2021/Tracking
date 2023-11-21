import React, {FC} from 'react'
import {KTIcon} from './KTIcon'
interface Props {
  handleAdd: () => void
  title: string
}
export const AddButton: FC<Props> = ({title, handleAdd}) => {
  return (
    <button type='button' className='btn btn-primary' onClick={handleAdd}>
      <KTIcon iconName='plus' className='fs-2' />
      {title}
    </button>
  )
}
