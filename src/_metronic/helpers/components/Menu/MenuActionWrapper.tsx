import React, {FC} from 'react'
interface Props {
  children: React.ReactNode
}
export const MenuActionWrapper: FC<Props> = ({children}) => {
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
      data-kt-menu='true'
    >
      {children}
    </div>
  )
}
