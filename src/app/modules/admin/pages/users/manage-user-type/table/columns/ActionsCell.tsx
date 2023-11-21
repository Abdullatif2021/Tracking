/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, QUERIES, optionAlertConfirm} from '../../../../../../../../_metronic/helpers'
import {useQueryResponse, useQueryResponseData, useQueryResponseSetLoading} from '../../core/QueryResponseProvider'
import {destroy} from '../../core/_requests'
import Swal from 'sweetalert2'
import {useNavigate, useParams} from 'react-router-dom'
import {AddPermissionTypePath, EditUserTypePath} from '../../../routes/RoutesNames'
import {useIntl} from 'react-intl'

import { UserType } from '../../core/_models'
import { useAuth } from '../../../../../../auth'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
type Props = {
  data: UserType
}

const ActionsCell: FC<Props> = ({data}) => {
  const {currentUser} = useAuth()
  const navigate = useNavigate()
  const setLoading= useQueryResponseSetLoading();
  const {query} = useQueryResponse()
  const items = useQueryResponseData()
  const queryClient = useQueryClient()
  const intl = useIntl();
  const { id } = useParams();
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleEdit = () => {
    let temp = {data:data ,type_id:id}
    navigate(EditUserTypePath, {state: temp})
  }
  const handlePermission = () => {
    let temp = {data:data ,type_id:id}
    navigate(AddPermissionTypePath, {state: temp})
  }
  const handleDelete = () => {
    Swal.fire({...optionAlertConfirm}).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        deleteItem.mutateAsync()
      }
    })
  }
  const deleteItem = useMutation(() => destroy(data?.id), {
    onSuccess: () => {
      setLoading(false)
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.MANAGE_USERS_LIST_VALUES}-${query}`])
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
      {currentUser?.roles.includes('edit_user_type') && <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />}
        {currentUser?.roles.includes('assgin_permission_user_type') &&   <MenuActionItem title={intl.formatMessage({id: 'permission'})} onCLick={handlePermission} />}
        {/* <MenuActionItem title={intl.formatMessage({id: 'delete'})} onCLick={handleDelete} /> */}
      </MenuActionWrapper>
      {/* end::Menu */}
    </>
  )
}

export {ActionsCell}
