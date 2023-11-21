/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {MenuComponent} from '../../../../../../../../_metronic/assets/ts/components'
import {ID,  QUERIES, optionAlertConfirm} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse, useQueryResponseData} from '../../core/QueryResponseProvider'
import {destroy} from '../../core/_requests'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import {
  AccountVehiclesPath,
  EditVehiclesPath,
  ViewVehiclesPath,
} from '../../../routes/RoutesNames'
import {useIntl} from 'react-intl'
import {useAuth} from '../../../../../../auth'
import {ViewCameraVehiclePath} from '../../../../camera/routes/RoutesNames'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
type Props = {
  id: ID
}

const ActionsCell: FC<Props> = ({id}) => {
  const {currentUser} = useAuth()
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
    const data = items.find((x) => x.id == id)
    navigate(EditVehiclesPath, {state: data})
  }

  const handleDelete = () => {
    Swal.fire({...optionAlertConfirm}).then((result) => {
      if (result.isConfirmed) {
        deleteItem.mutateAsync()
      }
    })
  }
  const deleteItem = useMutation(() => destroy(id), {
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.VEHICLES_TYPES}-${query}`])
    },
    onError: () => {},
  })

  const handleAccount = async () => {
    navigate(AccountVehiclesPath, {state: id})
  }
  const handleView = () => {
    navigate(ViewVehiclesPath, {state: id})
  }

  const handleViewCamera = () => {
    navigate(ViewCameraVehiclePath, {state: id})
  }

  const handleVehicleMap = () => {
    navigate('/car', {state: id})
  }
  return (
    <>
      <ActionButton />
      <MenuActionWrapper>
        {currentUser?.roles.includes('edit_vehicle') && (
          <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />
        )}
        {currentUser?.roles.includes('account_vehicle') && (
          <MenuActionItem title={intl.formatMessage({id: 'account'})} onCLick={handleAccount} />
        )}

        {currentUser?.roles.includes('view_camera_vehicle') && (
          <MenuActionItem
            title={intl.formatMessage({id: 'view_camera'})}
            onCLick={handleViewCamera}
          />
        )}
        {
          <MenuActionItem
            title={intl.formatMessage({id: 'vehicle_map'})}
            onCLick={handleVehicleMap}
          />
        }
        {/* <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} /> */}
        <MenuActionItem title={intl.formatMessage({id: 'view'})} onCLick={handleView} />
      </MenuActionWrapper>
    </>
  )
}

export {ActionsCell}
