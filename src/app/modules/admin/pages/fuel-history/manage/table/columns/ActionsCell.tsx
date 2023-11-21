/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, } from '../../../../../../../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'

import { EditPath } from '../../../routes/RoutesNames'
import { useAuth } from '../../../../../../auth'
import { FuelHistory } from '../../core/_models'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
type Props = {
  data: FuelHistory
}

const ActionsCell: FC<Props> = ({data}) => {
  const navigate = useNavigate()
  const { currentUser } = useAuth();
  const intl = useIntl()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleEdit = () => {
    navigate(EditPath, {state: data})
  }

  

  return (
    <>
      <ActionButton />
      <MenuActionWrapper>
      { currentUser?.roles.includes('update_fuel_history') &&    <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />}
      </MenuActionWrapper>

    </>
  )
}

export {ActionsCell}
