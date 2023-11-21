/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import { useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, } from '../../../../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData, useQueryResponseSetLoading} from '../../core/QueryResponseProvider'

import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'

import { EditPath } from '../../../routes/RoutesNames'
import { Trip } from '../../core/_models'
import { useAuth } from '../../../../../../auth'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
type Props = {
  id: ID
}

const ActionsCell: FC<Props> = ({id}) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate()
  const setLoading= useQueryResponseSetLoading();
  const {query} = useQueryResponse()
  const items = useQueryResponseData()
  const queryClient = useQueryClient()
  const intl = useIntl()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleEdit = () => {

    navigate(EditPath, {state: id})
  }


  return (
    <>
      <ActionButton />
      {/* begin::Menu */}
      <MenuActionWrapper>
      { currentUser?.roles.includes('edit_trip') &&    <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />}
      </MenuActionWrapper>
  
    </>
  )
}

export {ActionsCell}
