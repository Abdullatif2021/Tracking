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
import {EditColorPath} from '../../../routes/RoutesNames'
import {useIntl} from 'react-intl'
import {useAuth} from '../../../../../../auth'
import { ActionButton } from '../../../../../../../../_metronic/helpers/components/buttons/ActionButton'
import { MenuActionItem } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionItem'
import { MenuActionWrapper } from '../../../../../../../../_metronic/helpers/components/Menu/MenuActionWrapper'
type Props = {
  id: ID
}

const ActionsCell: FC<Props> = ({id}) => {
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
    const data = items.find((x) => x.id == id)
    navigate(EditColorPath, {state: data})
  }

  const handleDelete = () => {
    Swal.fire({...optionAlertConfirm}).then((result) => {
      if (result.isConfirmed) {
        setLoading(true)
        deleteItem.mutateAsync()
      }
    })
  }
  const deleteItem = useMutation(() => destroy(id), {
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
        {currentUser?.roles.includes('edit_vehicle_color') && (
          <MenuActionItem title={intl.formatMessage({id: 'edit'})} onCLick={handleEdit} />
        )}
        {currentUser?.roles.includes('delete_vehicle_color') && (
          <MenuActionItem title={intl.formatMessage({id: 'delete'})} onCLick={handleDelete} />
        )}
      </MenuActionWrapper>
      {/* end::Menu */}
    </>
  )
}

export {ActionsCell}
