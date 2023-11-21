/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, QUERIES, optionAlertConfirm} from '../../../../../../../../_metronic/helpers'
import {
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseSetLoading,
} from '../../core/QueryResponseProvider'
import {destroy} from '../../core/_requests'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {useIntl} from 'react-intl'

import {AddPermissionRolePath, EditRolePath} from '../../../routes/RoutesNames'
import {Role} from '../../core/_models'
import AddPermissionRole from '../../add-edit/AddPermissionRole'
import { useAuth } from '../../../../../../auth'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
type Props = {
  data: Role
}

const ActionsCell: FC<Props> = ({data}) => {
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const setLoading = useQueryResponseSetLoading()
  const {query} = useQueryResponse()
  const items = useQueryResponseData()
  const queryClient = useQueryClient()
  const intl = useIntl()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleEdit = () => {
    navigate(EditRolePath, {state: data})
  }

  const handlePermission = () => {
    navigate(AddPermissionRolePath, {state: data})
  }
  const handleDelete = () => {
    Swal.fire({...optionAlertConfirm}).then((result) => {
      if (result.isConfirmed) {
        // setLoading(true)
        // deleteItem.mutateAsync()
      }
    })
  }
  const deleteItem = useMutation(() => destroy(data?.id), {
    onSuccess: () => {
      setLoading(false)
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.VEHICLES_COLORS}-${query}`])
    },
    onError: () => {
      setLoading(false)
    },
  })

  return (
    <>
      <ActionButton />
      {/* begin::Menu */}
      <MenuActionWrapper>
      {currentUser?.roles.includes('edit_role')  &&     <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />}
      {currentUser?.roles.includes('assign_permission_role')&& <MenuActionItem
          title={intl.formatMessage({id: 'permission'})}
          onCLick={handlePermission}
        />}
      </MenuActionWrapper>
      {/* end::Menu */}
    </>
  )
}

export {ActionsCell}
