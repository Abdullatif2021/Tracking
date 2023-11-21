import React from 'react'

import {useIntl} from 'react-intl'
import { KTIcon } from '../..'

export const ActionButton: React.FC = ({}) => {
  const intl = useIntl()
  return (
    <a
      href='#'
      className='btn btn-light btn-active-light-primary btn-sm'
      data-kt-menu-trigger='click'
      data-kt-menu-placement='bottom-end'
    >
      {intl.formatMessage({id: 'MENU.ACTIONS'})}
      <KTIcon iconName='down' className='fs-5 m-0' />
    </a>
  )
}
