/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useContext, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {useDispatch} from 'react-redux'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID, KTIcon, QUERIES, optionAlertConfirm} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {
  useQueryResponse,
  useQueryResponseData,
  useQueryResponseSetLoading,
} from '../../core/QueryResponseProvider'
//import { destroy } from '../../core/_requests'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {EditPath, MapPath, PermissionPath} from '../../../routes/RoutesNames'
import {useIntl} from 'react-intl'
import { Station } from '../../core/_models'
import { useAuth } from '../../../../../../auth'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
type Props = {
  data: Station
}

const ActionsCell: FC<Props> = ({data}) => {
  const { currentUser } = useAuth();
  const setLoading = useQueryResponseSetLoading()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const items = useQueryResponseData()
  const queryClient = useQueryClient()
  const intl = useIntl()
  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const handleEdit = () => {
    navigate(EditPath, {state: data})
  }

  const handleDelete = () => {
    Swal.fire({...optionAlertConfirm}).then((result) => {
      if (result.isConfirmed) {
        //    deleteItem.mutateAsync()
      }
    })
  }


  // const deleteItem = useMutation(() => destroy(id), {
  //   onSuccess: () => {
  //     // ✅ update detail view directly
  //     queryClient.invalidateQueries([`${QUERIES.VEHICLES_COLORS}-${query}`])
  //   },
  //   onError: () => {

  //   }
  // })
  const handleMap = () => {

    navigate(MapPath, {state: {id:data?.id , permissions:data?.permissions}})
  }
  const handlePermission = () => {
    navigate(PermissionPath, {state: {id:data?.id,permissions:data?.permissions}})
  }


  return (
    <>
      <ActionButton />
      {/* begin::Menu */}
      <MenuActionWrapper>
      { currentUser?.roles.includes('edit_station') &&  <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />}

        <MenuActionItem title={intl.formatMessage({id: 'move_Map'})} onCLick={handleMap} />
        <MenuActionItem title={intl.formatMessage({id: 'permissions'})} onCLick={handlePermission} />
        {/* <MenuActionItem title={intl.formatMessage({id: 'delete'})} onCLick={handleDelete} /> */}
      </MenuActionWrapper>
      {/* end::Menu */}
    </>
  )
}

export {ActionsCell}
